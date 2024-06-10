import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { ResponsivePie } from "@nivo/pie";

function Stationwisegr() {
  const [uniqueValuesCount, setUniqueValuesCount] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const armsSnapshot = await db
          .ref("DPform/Arms FIR Detail")
          .once("value");
        const exciseSnapshot = await db
          .ref("DPform/Excise FIR detail")
          .once("value");
        const ndpsSnapshot = await db
          .ref("DPform/NDPS FIR Detail")
          .once("value");

        const armsData = armsSnapshot.val();
        const exciseData = exciseSnapshot.val();
        const ndpsData = ndpsSnapshot.val();

        const namesOfPSArms = [];
        console.log(armsSnapshot);

        const extractNameOfPS = (data) => {
          if (data && typeof data === "object") {
            Object.values(data).forEach((item) => {
              if (item && item["Name of PS"]) {
                namesOfPSArms.push(item["Name of PS"]);
              }
            });
          }
        };

        extractNameOfPS(armsData);
        extractNameOfPS(exciseData);
        extractNameOfPS(ndpsData);

        const uniqueValuesCount = namesOfPSArms.reduce((acc, cur) => {
          acc[cur] = (acc[cur] || 0) + 1;
          return acc;
        }, {});

        setUniqueValuesCount(uniqueValuesCount);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Remember to return something from your component
  return (
    <ResponsivePie
      data={Object.entries(uniqueValuesCount).map(([id, value]) => ({
        id,
        value,
      }))}
      margin={{ top: 40, right: 40, bottom: 60, left: 50 }}
      startAngle={-12}
      innerRadius={0.6}
      padAngle={2}
      cornerRadius={10}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsRadiusOffset={0.45}
      arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        { match: { id: "ruby" }, id: "dots" },
        { match: { id: "c" }, id: "dots" },
        { match: { id: "go" }, id: "dots" },
        { match: { id: "python" }, id: "dots" },
        { match: { id: "scala" }, id: "lines" },
        { match: { id: "lisp" }, id: "lines" },
        { match: { id: "elixir" }, id: "lines" },
        { match: { id: "javascript" }, id: "lines" },
      ]}
    />
  );
}

export default Stationwisegr;
