import React from "react";
import { psData } from "./ps";

function POLICESTATION() {
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>AC No.</th>
            <th>AC Name</th>
            <th>POLICE STATION AREA</th>
          </tr>
        </thead>
        <tbody>
          {psData.map((item) => {
            return (
              <tr>
                <td>{item["AC No."]}</td>
                <td>{item["AC Name"]}</td>
                <td>{item["POLICE STATION AREA"]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default POLICESTATION;
