import React from "react";
import { dpoData } from "./dpoData";

function DPO() {
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>SL. NO.</th>
            <th>RANK</th>
            <th>CADRE</th>
            <th>NAME</th>
            <th>BELT NO.</th>
            <th>PIS NO.</th>
            <th>MOB. NO.</th>
            <th>PRESENT POSTING IN DISTT.</th>
          </tr>
        </thead>
        <tbody>
          {dpoData.map((item) => {
            return (
              <tr>
                <td>{item["SL. NO."]}</td>
                <td>{item["RANK"]}</td>
                <td>{item["CADRE"]}</td>
                <td>{item["NAME"]}</td>
                <td>{item["BELT NO."]}</td>
                <td>{item["PIS NO."]}</td>
                <td>{item["MOB. NO."]}</td>
                <td>{item["PRESENT POSTING IN DISTT."]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DPO;
