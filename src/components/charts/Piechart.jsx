import React, { useState, useEffect } from "react";
import { ResponsivePie } from "@nivo/pie";
import { db } from "../../firebase/firebase";

function Piechart() {
  const [acData, setAcData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await db.ref("dpData2").once("value");
        const data = snapshot.val();
        // console.log("Fetched data:", data);

        if (Array.isArray(data) && data.length > 0) {
          const uniqueACData = {};

          for (const entry of data) {
            const acName = entry["AC Name"].trim();
            const totalStrength = parseInt(entry["Total Strength"], 10);

            if (!uniqueACData[acName]) {
              uniqueACData[acName] = totalStrength;
            }
          }

          const uniqueACArray = Object.entries(uniqueACData).map(
            ([acName, totalStrength]) => ({
              id: acName,
              label: acName,
              value: totalStrength,
              color: `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`,
            })
          );

          setAcData(uniqueACArray);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  {
    /**
  const addData = async (newData) => {
    try {
      // Push new data to the database
      await db.ref("dpdata").push(newData);
      console.log("Data added successfully!");
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };
  addData({ newData: "New Data" });
*/
  }

  return (
    <ResponsivePie
      data={acData}
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

export default Piechart;
