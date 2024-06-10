import React, { useState, useEffect } from "react";
import { ResponsivePie } from "@nivo/pie";
import { db } from "../../firebase/firebase";

function Checkpostgr() {
  const [totalValues, setTotalValues] = useState({
    cash: 0,
    drugs: 0,
    liquor: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const armsSnapshot = await db
          .ref(
            "DPform/Day to day seizure made at inter state border checkposts"
          )
          .once("value");
        const armsData = armsSnapshot.val();

        const extractedTotalValues = {
          cash: 0,
          drugs: 0,
          liquor: 0,
        };
        console.log(armsData);
        const extractTotalValues = (data) => {
          if (data && typeof data === "object") {
            Object.values(data).forEach((item) => {
              extractedTotalValues.cash += parseInt(item["Cash (in Rs)"] || 0);
              extractedTotalValues.drugs += parseInt(
                item["Drugs (in kg)"] || 0
              );
              extractedTotalValues.liquor += parseInt(
                item["Liquor-Country Liquor-Ltr"] || 0
              );
            });
          }
        };

        extractTotalValues(armsData);
        setTotalValues(extractedTotalValues);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    console.log(totalValues);
    fetchData();
  }, []);

  return (
    <ResponsivePie
      data={[
        { id: "Cash", value: totalValues.cash },
        { id: "Drugs", value: totalValues.drugs },
        { id: "Liquor", value: totalValues.liquor },
      ]}
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
        { match: { id: "Cash" }, id: "dots" },
        { match: { id: "Drugs" }, id: "dots" },
        { match: { id: "Liquor" }, id: "dots" },
      ]}
    />
  );
}

export default Checkpostgr;
