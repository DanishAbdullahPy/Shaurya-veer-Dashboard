import React, { useState, useEffect } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { db } from "../../firebase/firebase"; // Import your firebase instance here

function Acpcwisegr() {
  const [aggregatedData, setAggregatedData] = useState([]);
  const parliamentaryConstituencies = {
    NewDelhi: {
      "New Delhi": 2,
      "Malviya Nagar": 1,
      "Greater Kailash": 3,
      "Kasturba Nagar": 3,
    },
    SouthDelhi: {
      "Ambedkar Nagar": 2,
      "Sangham Vihar": 2,

      Deoli: 1,
      Chtaparpurt: 1,
      Mehrauli: 1,
    },
  };

  useEffect(() => {
    // Transform data for the graph
    const graphData = Object.entries(parliamentaryConstituencies).map(
      ([type, data]) => ({
        type,
        ...data,
      })
    );

    setAggregatedData(graphData);
  }, []);

  return (
    <ResponsiveBar
      data={aggregatedData}
      keys={[
        "New Delhi",
        "Malviya Nagar",
        "Greater Kailash",
        "Kasturba Nagar",
        "Ambedkar Nagar",
        "Sangham Vihar",
        "Chtaparpurt",
        "Deoli",
        "Mehrauli",
      ]} // Use actual keys
      indexBy="type"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      maxValue={10}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "pastel1" }}
      borderColor={{ from: "color", modifiers: [["darker", "0.9"]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Constituency Type",
        legendPosition: "middle",
        legendOffset: 32,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Count",
        legendPosition: "middle",
        legendOffset: -40,
        truncateTickAt: 0,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 125,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={(e) =>
        `${e.id}: ${e.formattedValue} in country: ${e.indexValue}`
      }
    />
  );
}

export default Acpcwisegr;
