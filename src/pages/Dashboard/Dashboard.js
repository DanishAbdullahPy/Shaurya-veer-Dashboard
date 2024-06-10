import React, { useState, useContext } from "react";
import { AuthContext } from "../../components/Context/AuthContext";
import "./Dashboard.css";
import { BiReceipt, BiEdit, BiUserPlus, BiSpreadsheet } from "react-icons/bi";

import Piechart from "../../components/charts/Piechart";
import Piechartcopy from "../../components/charts/Piechartcopy";

import Barchart from "../../components/charts/Barchart";

// import Createbill from "./Createbill";
// import Update from "./Update";
// import Addmembers from "./Addmembers";
// import Package from "./Package";
import Popup from "../../components/Popup/Popup";
import { fsteam } from "../../components/data/fsteam";


function Dashboard() {
  const [trigger, setTrigger] = useState(false);
  const [selection, setSelection] = useState("");

  const user = useContext(AuthContext);

  return (
    <div className="dashboard">
      
      {/* <div className="card2" onClick={() => handleButtonClick("Update/Delete")}> */}
      {/* Update/Delete */}
      {/* <i> */}
      {/* <BiEdit /> */}
      {/* </i> */}
      {/* </div> */}
      <div className="card3">
        <h3>No. of Booth</h3>
        <Piechartcopy />
      </div>
      {/* <div className="card4"> */}
      {/* Package */}
      {/* <i> */}
      {/* <BiSpreadsheet /> */}
      {/* </i> */}
      {/* </div> */}
      <div className="table">
        <h3>Rank Wise Deployment</h3>
        <Barchart />
      </div>
      <div className="card5">
        <img
          src="./Delhi_Police_Logo.png"
          alt=""
          style={{ width: "300px", height: "300px" }}
        />
      </div>
      <Popup trigger={trigger} setTrigger={setTrigger}>
        {/* {selection === "CreateBill" && <Createbill />} */}
        {/* {selection === "Update/Delete" && <Update />} */}
        {/* {selection === "AddMember" && <Addmembers />} */}
        {/* {selection === "Package" && <Package />} */}
      </Popup>
    </div>
  );
}

export default Dashboard;
