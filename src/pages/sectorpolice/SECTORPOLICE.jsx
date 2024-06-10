import React from "react";
import { sectorpoliceData } from "./sectorpoliceData";

function SECTORPOLICE() {
  return (
    <div>
      <table>
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
            <th>SECTOR OFFICER NAME</th>
            <th>SECTOR OFFICER CNTACT NO.</th>
            <th>AC NO</th>
          </tr>
        </thead>
        <tbody>
          {sectorpoliceData.map((data) => {
            return (
              <tr>
                <td>{data["SL. NO."]}</td>
                <td>{data.RANK}</td>
                <td>{data.CADRE}</td>
                <td>{data.NAME}</td>
                <td>{data["BELT NO."]}</td>
                <td>{data["PIS NO."]}</td>
                <td>{data["MOB. NO."]}</td>
                <td>{data["PRESENT POSTING IN DISTT."]}</td>
                <td>{data["SECTOR OFFICER NAME"]}</td>
                <td>{data["SECTOR OFFICER CNTACT NO."]}</td>
                <td>{data["AC NO"]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SECTORPOLICE;
