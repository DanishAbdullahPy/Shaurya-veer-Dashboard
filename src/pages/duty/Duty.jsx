import React, { useState } from "react";
import "./style.css";
// import { tabledata } from "./table";
import { data } from "./dpData";

function generateTableRows(data) {
  const uniqueKeys = [...new Set(data.map((item) => item["AC No."]))];
  let rows = [];

  uniqueKeys.forEach((acNo) => {
    const filteredData = data.filter((item) => item["AC No."] === acNo);
    let rowCount = filteredData.length;

    filteredData.forEach((row, index) => {
      if (index === 0) {
        rows.push(
          <tr key={`${acNo}_${index}`}>
            <td rowSpan={rowCount + 1}>{row["AC No."]}</td>
            <td rowSpan={rowCount + 1}>{row["AC Name"]}</td>
            <td rowSpan={rowCount + 1}>{row["Police District"]}</td>
            <td rowSpan={rowCount + 1}>{row["Total Strength"]}</td>
            <td rowSpan={rowCount + 1}>{row["Election District"]}</td>
          </tr>
        );
      }

      rows.push(
        <tr key={`${acNo}_${index}`}>
          <td>{row["No. of Team"]}</td>
          <td>{row["Rank"]}</td>
          <td>{row["Name"]}</td>
          <td>{row["Belt No."]}</td>
          <td>{row["PIS No."]}</td>
          <td>
            <a
              href={`https://wa.me/${row["Mobile No."]}`}
              target="_blank"
              style={{ textDecoration: "none", color: "black" }}
            >
              {row["Mobile No."]}
            </a>
          </td>
          <td>{row["Present posting in District"]}</td>
        </tr>
      );
    });
  });

  return rows;
}

function Duty() {
  const [tabledata, setTabledata] = useState(data);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const name = e.target.acNo.value;
    if (name === "") {
      setTabledata(data);
      return;
    }
    const filteredData = data.filter((data) => data["Name"] === name);
    setTabledata(filteredData);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSearch}>
          <div style={{ marginBottom: "10px" }}>
            <input
              type="text"
              name="acNo"
              placeholder="Name"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
            />

            <button type="submit">Search</button>
          </div>
        </form>
      </div>
      <table border="1">
        <thead>
          <tr>
            <th>AC No.</th>
            <th>AC Name</th>
            <th>Police District</th>
            <th>Total Strength</th>
            <th>Election District</th>
            <th>No. of Team</th>
            <th>Rank</th>
            <th>Name</th>
            <th>Belt No.</th>
            <th>PIS No.</th>
            <th>Mobile No.</th>
            <th>Present posting in District</th>
          </tr>
        </thead>
        <tbody>{generateTableRows(tabledata)}</tbody>
      </table>
    </div>
  );
}

export default Duty;

{
  /**

        <tbody>
          {tabledata.map((data, index) => (
            <tr key={index}>
              <td>{data["AC No."]}</td>
              <td>{data["AC Name"]}</td>
              <td>{data["Police District"]}</td>
              <td>{data["No. of Team"]}</td>
              <td>{data["Rank"]}</td>
              <td>{data["Name"]}</td>
              <td>{data["Belt No."]}</td>
              <td>{data["PIS No."]}</td>
              <td>
                <a
                  href={`https://wa.me/${data["Mobile No."]}`}
                  target="_blank"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {data["Mobile No."]}
                </a>
              </td>
              <td>{data["Present posting in District"]}</td>
              <td>{data["Total Strength"]}</td>
              <td>{data["Election District"]}</td>
            </tr>
          ))}
        </tbody>
   *
   *
   *
   *
   *
   *
   *
         <tbody>
          {tabledata.map((data, index) => (
            <>
              <tr>
                <td rowSpan="6">{data["AC No."]}</td>
                <td rowSpan="6">{data["AC Name"]}</td>
                <td rowSpan="6">{data["Police District"]}</td>
                <td rowSpan="6">{data["Total Strength"]}</td>
                <td rowSpan="6">{data["Election District"]}</td>

                {data.Members.map((data1, index1) => (
                  <>
                    {index1 == 0 && <td rowSpan="3">{data1["No. of Team"]}</td>}

                    {data1["Team Members"].map((data2, index2) => {
                      <>
                        <td>{data2["Rank"]}</td>
                        <td>{data2["Name"]}</td>
                        <td>{data2["Belt No."]}</td>
                        <td>{data2["PIS No."]}</td>
                        <td>{data2["Mobile No."]}</td>
                        <td>{data2["Present posting in District"]}</td>
                      </>;
                    })}
                  </>
                ))}
              </tr>

              {
                <>
                  {data.Members.map((data1, index1) => (
                    <tr key={index1}>
                      {index1 !== 0 && (
                        <td rowSpan="3">{data1["No. of Team"]}</td>
                      )}

                      {data1["Team Members"].map((data2, index2) => {
                        {
                          index2 !== 0 && (
                            <>
                              <td>{data2["Rank"]}</td>
                              <td>{data2["Name"]}</td>
                              <td>{data2["Belt No."]}</td>
                              <td>{data2["PIS No."]}</td>
                              <td>{data2["Mobile No."]}</td>
                              <td>{data2["Present posting in District"]}</td>
                              {console.log(index2)}
                            </>
                          );
                        }
                      })}
                    </tr>
                  ))}
                </>
              }
            </>
          ))}
        </tbody>
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
 <tr>
                <td>"Rank"</td>
                <td>"Name"</td>
                <td>"Belt No."</td>
                <td>"PIS No."</td>
                <td>"Mobile No."</td>
                <td>"Present posting in District"</td>
              </tr>
              <tr>
                <td>"Rank"</td>
                <td>"Name"</td>
                <td>"Belt No."</td>
                <td>"PIS No."</td>
                <td>"Mobile No."</td>
                <td>"Present posting in District"</td>
              </tr>
              <tr>
                <td rowSpan="3">"Rank"</td>
                <td>"Rank"</td>
                <td>"Name"</td>
                <td>"Belt No."</td>
                <td>"PIS No."</td>
                <td>"Mobile No."</td>
                <td>"Present posting in District"</td>
              </tr>
              <tr>
                <td>"Rank"</td>
                <td>"Name"</td>
                <td>"Belt No."</td>
                <td>"PIS No."</td>
                <td>"Mobile No."</td>
                <td>"Present posting in District"</td>
              </tr>
              <tr>
                <td>"Rank"</td>
                <td>"Name"</td>
                <td>"Belt No."</td>
                <td>"PIS No."</td>
                <td>"Mobile No."</td>
                <td>"Present posting in District"</td>
              </tr>
*/
}

{
  /**


                <table border="1">
        <thead>
          <tr>
            <th>AC No.</th>
            <th>AC Name</th>
            <th>Police District</th>
            <tr>
              <th>No. of Team</th>

              <th>Rank</th>
              <th>Name</th>
              <th>Belt No.</th>
              <th>PIS No.</th>
              <th>Mobile No.</th>
              <th>Present posting in District</th>
            </tr>
            <th>Total Strength</th>
            <th>Election District</th>
          </tr>
        </thead>

        {tabledata.map((data, index) => (
          <tbody >
            <tr>
              <td rowSpan="8">{data["AC No."]}</td>
              <td rowSpan="8">{data["AC Name"]}</td>
              <td rowSpan="8">{data["Police District"]}</td>

              {data.Members.map((data1, index1) => (
                <>
                  <tr >
                    <td rowSpan={data1["Team Members"].length + 1}>
                      {data1["No. of Team"]}
                    </td>
                  </tr>

                  {data1["Team Members"].map((data2, index2) => (
                    <tr key={index2}>
                      <td>{data2["Rank"]}</td>
                      <td>{data2["Name"]}</td>
                      <td>{data2["Belt No."]}</td>
                      <td>{data2["PIS No."]}</td>
                      <td>{data2["Mobile No."]}</td>
                      <td>{data2["Present posting in District"]}</td>
                    </tr>
                  ))}
                </>
              ))}
              <td rowSpan="8">{data["Total Strength"]}</td>
              <td rowSpan="8">{data["Election District"]}</td>
            </tr>
          </tbody>
        ))}
      </table>
 */
}
