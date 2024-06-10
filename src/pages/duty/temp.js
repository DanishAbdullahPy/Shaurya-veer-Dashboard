{
  "AC No.": "42",
  "AC Name": "Kasturba Nagar",
  "Police District": "South",
  "Total Strength": "8",
  "Election District": "South East",
  "No. of Team": "1",
  "Members": [
    {
      "Rank": "SI",
      "Name": "KARAN SINGH",
      "Belt No.": "D-3398",
      "PIS No.": "28860554",
      "Mobile No.": "9999363646",
      "Present posting in District": "PS Lodhi Colony"
    },
    {
      "Rank": "ASI",
      "Name": "JAI RAM MEENA",
      "Belt No.": "447/SD",
      "PIS No.": "28010538",
      "Mobile No.": "9013310037",
      "Present posting in District": "PS Lodhi Colony"
    },
    {
      "Rank": "CT",
      "Name": "AMIT KUMAR",
      "Belt No.": "864/SD",
      "PIS No.": "28181349",
      "Mobile No.": "9953775150",
      "Present posting in District": "PS Lodhi Colony"
    },
    {
      "Rank": "CT",
      "Name": "RAJESH KUMAR",
      "Belt No.": "2454/SD",
      "PIS No.": "28160957",
      "Mobile No.": "9928542424",
      "Present posting in District": "PS Lodhi Colony"
    },
    {
      "No. of Team": "2",
      "Rank": "SI",
      "Name": "PREM SINGH",
      "Belt No.": "234/SD",
      "PIS No.": "28883149",
      "Mobile No.": "8587891080",
      "Present posting in District": "PS K M Pur"
    },
    {
      "Rank": "HC",
      "Name": "BHUDEV SHRMA",
      "Belt No.": "1565/SD",
      "PIS No.": "28093268",
      "Mobile No.": "9968463113",
      "Present posting in District": "PS K M Pur"
    },
    {
      "Rank": "CT",
      "Name": "SOMDUTT",
      "Belt No.": "3421/SD",
      "PIS No.": "28122443",
      "Mobile No.": "9560985334",
      "Present posting in District": "PS K M Pur"
    },
    {
      "Rank": "CT",
      "Name": "PAWAN YADAV",
      "Belt No.": "1767/SD",
      "PIS No.": "28060975",
      "Mobile No.": "9968375427",
      "Present posting in District": "PS K M Pur"
    }
  ]
},


        {/**  <tr>
          <td>42</td>
          <td>Kasturba Nagar</td>
          <td>South</td>
          <td>1</td>
          <td>SI</td>
          <td>KARAN SINGH</td>
          <td>D-3398</td>
          <td>28860554</td>
          <td>9999363646</td>
          <td>PS Lodhi Colony</td>
          <td>8</td>
          <td>South East</td>
        </tr>
        <tr>
          <td></td>




          <td></td>
          <td></td>
          <td></td>
          <td>ASI</td>
          <td>JAI RAM MEENA</td>
          <td>447/SD</td>
          <td>28010538</td>
          <td>9013310037</td>
          <td>PS Lodhi Colony</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>CT</td>
          <td>AMIT KUMAR</td>
          <td>864/SD</td>
          <td>28181349</td>
          <td>9953775150</td>
          <td>PS Lodhi Colony</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>CT</td>
          <td>RAJESH KUMAR</td>
          <td>2454/SD</td>
          <td>28160957</td>
          <td>9928542424</td>
          <td>PS Lodhi Colony</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>2</td>
          <td>SI</td>
          <td>PREM SINGH</td>
          <td>234/SD</td>
          <td>28883149</td>
          <td>8587891080</td>
          <td>PS K M Pur</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>HC</td>
          <td>BHUDEV SHRMA</td>
          <td>1565/SD</td>
          <td>28093268</td>
          <td>9968463113</td>
          <td>PS K M Pur</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>CT</td>
          <td>SOMDUTT</td>
          <td>3421/SD</td>
          <td>28122443</td>
          <td>9560985334</td>
          <td>PS K M Pur</td>
          <td></td>
          <td></td>
  </tr> */}








          {/**
 * ADVANCE ONE
{tabledata.map((team) => (
      team.Members.map((member, memberIndex) => (
        member["Team Members"].map((data1, index) => (
          <tr key={team["AC No."] + "-" + index}>
            {index === 0 && memberIndex === 0 && (
              <>
                <td rowSpan={team.Members.reduce((total, m) => total + m["Team Members"].length, 0)}>{team["AC No."]}</td>
                <td rowSpan={team.Members.reduce((total, m) => total + m["Team Members"].length, 0)}>{team["AC Name"]}</td>
                <td rowSpan={team.Members.reduce((total, m) => total + m["Team Members"].length, 0)}>{team["Police District"]}</td>
                <td rowSpan={team.Members.reduce((total, m) => total + m["Team Members"].length, 0)}>{member["No. of Team"]}</td>
                <td>{data1["Rank"]}</td>
                <td>{data1["Name"]}</td>
                <td>{data1["Belt No."]}</td>
                <td>{data1["PIS No."]}</td>
                <td>{data1["Mobile No."]}</td>
                <td>{data1["Present posting in District"]}</td>
                <td rowSpan={team.Members.reduce((total, m) => total + m["Team Members"].length, 0)}>{team["Total Strength"]}</td>
                <td rowSpan={team.Members.reduce((total, m) => total + m["Team Members"].length, 0)}>{team["Election District"]}</td>
              </>
            )}
            {index !== 0 && (
              <>
                <td>{data1["Rank"]}</td>
                <td>{data1["Name"]}</td>
                <td>{data1["Belt No."]}</td>
                <td>{data1["PIS No."]}</td>
                <td>{data1["Mobile No."]}</td>
                <td>{data1["Present posting in District"]}</td>
              </>
            )}
          </tr>
        ))
      ))
    ))}
*/}



        {/** FRESH ONE
 *
  {tabledata.map((team) => (
            team.Members.map((member, memberIndex) => (
              <tr key={team["AC No."] + "-" + memberIndex}>
                {memberIndex === 0 && (
                  <>
                    <td rowSpan={team.Members.length}>{team["AC No."]}</td>
                    <td rowSpan={team.Members.length}>{team["AC Name"]}</td>
                    <td rowSpan={team.Members.length}>{team["Police District"]}</td>
                    <td rowSpan={team.Members.length}>{team["No. of Team"]}</td>
                  </>
                )}
                <td>{member["Rank"]}</td>
                <td>{member["Name"]}</td>
                <td>{member["Belt No."]}</td>
                <td>{member["PIS No."]}</td>
                <td>{member["Mobile No."]}</td>
                <td>{member["Present posting in District"]}</td>
                {memberIndex === 0 && (
                  <>
                    <td ro+wSpan={team.Members.length}>{team["Total Strength"]}</td>
                    <td rowSpan={team.Members.length}>{team["Election District"]}</td>
                  </>
                )}
              </tr>
            ))
          ))}
 */}

        {/** SECOND ON WITH TEAM NO. ERROR
 {tabledata.map((team, teamIndex) => (
            team.Members.map((member, memberIndex) => (
              <tr key={teamIndex + "-" + memberIndex}>
                {memberIndex === 0 && (
                  <>
                    <td rowSpan={team.Members.length}>{team["AC No."]}</td>
                    <td rowSpan={team.Members.length}>{team["AC Name"]}</td>
                    <td rowSpan={team.Members.length}>{team["Police District"]}</td>
                    <td rowSpan={team.Members.length}>{team["No. of Team"]}</td>
                    <td>{member["Rank"]}</td>
                    <td>{member["Name"]}</td>
                    <td>{member["Belt No."]}</td>
                    <td>{member["PIS No."]}</td>
                    <td>{member["Mobile No."]}</td>
                    <td>{member["Present posting in District"]}</td>
                    <td rowSpan={team.Members.length}>{team["Total Strength"]}</td>
                    <td rowSpan={team.Members.length}>{team["Election District"]}</td>
                  </>
                )}
                {memberIndex !== 0 && (
                  <>
                    <td>{member["Rank"]}</td>
                    <td>{member["Name"]}</td>
                    <td>{member["Belt No."]}</td>
                    <td>{member["PIS No."]}</td>
                    <td>{member["Mobile No."]}</td>
                    <td>{member["Present posting in District"]}</td>
                  </>
                                  )}
              </tr>
            ))
          ))}

                */}
                <tbody>
                {/**
         * // FIRST ONE MINE
         *
         *    {tabledata.map((data, index) => (
                <tr key={index}>
                  <td rowSpan="8">{data["AC No."]}</td>
                  <td rowSpan="8">{data["AC Name"]}</td>
                  <td rowSpan="8">{data["Police District"]}</td>
                  <td rowSpan="8">{data["No. of Team"]}</td>

                  {data.Members.map((data2,index2)=>{
                    {console.log(data2["Name"])}
                  <React.Fragment key={index2}>

                   <td>{data2["Rank"]}</td>
                   <td>{data2["Name"]}</td>
                   <td>{data2["Belt No."]}</td>
                   <td>{data2["PIS No."]}</td>
                   <td>{data2["Mobile No."]}</td>
                   <td>{data2["Present posting in District"]}</td>
                   </React.Fragment>


                  })}

      <td rowSpan="8">{data["Total Strength"]}</td>
                  <td rowSpan="8">{data["Election District"]}</td>
                </tr>
              ))}
         *

              */}
              </tbody>

              {/**  <tr>
                <td>42</td>
                <td>Kasturba Nagar</td>
                <td>South</td>
                <td>1</td>
                <td>SI</td>
                <td>KARAN SINGH</td>
                <td>D-3398</td>
                <td>28860554</td>
                <td>9999363646</td>
                <td>PS Lodhi Colony</td>
                <td>8</td>
                <td>South East</td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>ASI</td>
                <td>JAI RAM MEENA</td>
                <td>447/SD</td>
                <td>28010538</td>
                <td>9013310037</td>
                <td>PS Lodhi Colony</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>CT</td>
                <td>AMIT KUMAR</td>
                <td>864/SD</td>
                <td>28181349</td>
                <td>9953775150</td>
                <td>PS Lodhi Colony</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>CT</td>
                <td>RAJESH KUMAR</td>
                <td>2454/SD</td>
                <td>28160957</td>
                <td>9928542424</td>
                <td>PS Lodhi Colony</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>2</td>
                <td>SI</td>
                <td>PREM SINGH</td>
                <td>234/SD</td>
                <td>28883149</td>
                <td>8587891080</td>
                <td>PS K M Pur</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>HC</td>
                <td>BHUDEV SHRMA</td>
                <td>1565/SD</td>
                <td>28093268</td>
                <td>9968463113</td>
                <td>PS K M Pur</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>CT</td>
                <td>SOMDUTT</td>
                <td>3421/SD</td>
                <td>28122443</td>
                <td>9560985334</td>
                <td>PS K M Pur</td>
                <td></td>
                <td></td>
        </tr> */}