import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const data = [
  { country: "Drugs", value: 100 },
  { country: "Freebies", value: 200 },
  { country: "Cash", value: 900 },
  { country: "Liquor", value: 400 },
];

const Bargraph2v = () => (
  <div style={{ height: "300px" }}>
    <ResponsiveBar
      data={data}
      keys={["value"]}
      indexBy="country"
      margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
      padding={0.3}
      colors={{ scheme: "nivo" }}
      borderColor={{ from: "color", modifiers: [["darker", "1.6"]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Value",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", "1.6"]] }}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  </div>
);

export default Bargraph2v;
