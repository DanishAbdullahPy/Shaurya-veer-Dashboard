import React, { useState, useEffect } from "react";
import { ResponsivePie } from "@nivo/pie";
import { db } from "../../firebase/firebase";

function Liencedgr() {
  const [totalValues, setTotalValues] = useState({
    cash: 0,
    drugs: 0,
    liquor: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const armsSnapshot = await db
          .ref("DPform/Arms Seizure & Political Campaigns")
          .once("value");
        const armsData = armsSnapshot.val();

        const extractedTotalValues = {
          arms: 0,
          cartriges: 0,
          voluntarily: 0,
        };
        console.log(armsData);
        const extractTotalValues = (data) => {
          if (data && typeof data === "object") {
            Object.values(data).forEach((item) => {
              extractedTotalValues.arms += parseInt(
                item["Licensed Arms-Impounded-Arms"] || 0
              );
              extractedTotalValues.cartriges += parseInt(
                item["Licensed Arms-Impounded-Cartridges"] || 0
              );
              extractedTotalValues.voluntarily += parseInt(
                item["Licensed Arms-Deposited-Voluntarily"] || 0
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
        { id: "Arms", value: totalValues.arms },
        { id: "Cartriges", value: totalValues.cartriges },
        { id: "Voluntarily", value: totalValues.voluntarily },
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
        { match: { id: "Arms" }, id: "dots" },
        { match: { id: "Cartriges" }, id: "dots" },
        { match: { id: "Voluntarily" }, id: "dots" },
      ]}
    />
  );
}

export default Liencedgr;
