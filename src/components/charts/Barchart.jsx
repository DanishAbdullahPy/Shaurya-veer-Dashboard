import React, { useState, useEffect } from "react";
import { ResponsiveBar } from "@nivo/bar";
// import { bardata2 as data2 } from "../chartdata/barchart2";
import { rankwiseData as data } from "../chartdata/rankwise";

function Barchart() {
  const [aggregatedData, setAggregatedData] = useState({});

  useEffect(() => {
    // Aggregate data based on unique "AC NAME & AC NO."
    const aggregateData = () => {
      const aggregated = {};

      data.forEach((entry) => {
        const acNameAndNo = entry["AC NAME & AC NO."];
        if (!aggregated[acNameAndNo]) {
          aggregated[acNameAndNo] = {
            ACP: 0,
            INSPR: 0,
            HC: 0,
            US: 0,
            CT: 0,
            WCT: 0,
            DHG: 0,
            CAPF: 0,

            // Add other ranks as needed...
          };
        }
        aggregated[acNameAndNo].ACP += parseInt(entry["ACP"]);
        aggregated[acNameAndNo].INSPR += parseInt(entry["INSPR."]);
        aggregated[acNameAndNo].HC += parseInt(entry["HC"]);
        aggregated[acNameAndNo].US += parseInt(entry["U/S"]);
        aggregated[acNameAndNo].CT += parseInt(entry["CT"]);
        aggregated[acNameAndNo].WCT += parseInt(entry["W/CT"]);
        aggregated[acNameAndNo].DHG += parseInt(entry["DHG"]);
        aggregated[acNameAndNo].CAPF += parseInt(entry["CAPF"]);

        // Update other ranks as needed...
      });

      return aggregated;
    };

    setAggregatedData(aggregateData());
  }, []);

  return (
    <ResponsiveBar
      data={Object.entries(aggregatedData).map(([district, data]) => ({
        district,
        ...data,
      }))}
      keys={["ACP", "INSPR", "US", "HC", "CT", "WCT", "DHG", "CAPF"]}
      indexBy="district"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      maxValue={600}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "pastel1" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", "0.9"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "District",
        legendPosition: "middle",
        legendOffset: 32,
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "No.",
        legendPosition: "middle",
        legendOffset: -40,
        truncateTickAt: 0,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
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
        e.id + ": " + e.formattedValue + " in country: " + e.indexValue
      }
    />
  );
}

export default Barchart;
