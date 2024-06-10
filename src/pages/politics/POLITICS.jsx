import React from "react";
import "./style.css";
import Piechart from "../../components/charts/Piechart";
import Politicscars from "./Politicscars";
import { challansData as data } from "./chalans";

function POLITICS() {
  console.log(data);
  return (
    <div className="politics">
      <div className="card1">
        {/* <Piechart /> */}
        <table>
          <thead>
            <tr>
              <th>SN NO.</th>
              <th>NAME OF TRAFFIC DISTRICT</th>
              <th>TOTAL NO OF CHALLAN FOR MISUSE OF VEHICLES</th>
              <th>UP TO DATE CHALLAN SINCE 00.00.2024</th>
              <th>OTHER/REMARKS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row["SN NO."]}</td>
                <td>{row["NAME OF TRAFFIC DISTRICT"]}</td>
                <td>{row["TOTAL NO OF CHALLAN FOR MISUSE OF VEHICLES"]}</td>
                <td>{row["UP TO DATE CHALLAN SINCE 00.00.2024"]}</td>
                <td>{row["OTHER/REMARKS"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card2">{/* <Piechart /> */}</div>

      <div className="table">
        <h3>Challan</h3>
        {/* <Barchart /> */}
        <Politicscars />
      </div>
    </div>
  );
}

export default POLITICS;
