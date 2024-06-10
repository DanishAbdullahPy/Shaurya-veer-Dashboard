import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { ResponsiveCalendar } from "@nivo/calendar";

function Daywise() {
  const [daywiseData, setDaywiseData] = useState([]);

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

        const armsData = armsSnapshot.val() || {};
        const exciseData = exciseSnapshot.val() || {};
        const ndpsData = ndpsSnapshot.val() || {};

        const allData = { ...armsData, ...exciseData, ...ndpsData };

        const dateMap = {};
        for (const key in allData) {
          const date = allData[key].Date;
          if (date) {
            if (!dateMap[date]) {
              dateMap[date] = 1;
            } else {
              dateMap[date]++;
            }
          }
        }

        const formattedData = Object.entries(dateMap).map(([day, value]) => ({
          day,
          value,
        }));

        setDaywiseData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ResponsiveCalendar
      data={daywiseData}
      from="2024-03-01"
      to="2024-07-12"
      emptyColor="#eeeeee"
      colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
      margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
      yearSpacing={40}
      monthBorderColor="#ffffff"
      dayBorderWidth={1}
      dayBorderColor="#ffffff"
      legends={[
        {
          anchor: "bottom-right",
          direction: "row",
          translateY: 36,
          itemCount: 4,
          itemWidth: 42,
          itemHeight: 36,
          itemsSpacing: 14,
          itemDirection: "right-to-left",
        },
      ]}
    />
  );
}

export default Daywise;
