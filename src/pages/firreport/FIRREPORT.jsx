import React, { useEffect } from "react";
import "./style.css";
import Barchart from "../../components/charts/Barchart";
import Piechart from "../../components/charts/Piechart";
// import Bargraph2v from "../../components/charts/Barghaph2v";
import Daywise from "./Daywise";
import { db } from "../../firebase/firebase";
import Stationwisegr from "./Stationwisegr";
import Acpcwisegr from "./Acpcwisegr";

function FIRREPORT() {
  return (
    <div className="testreport">
     
      <div className="card2">
        <h3>FIR w.r.t AC&PC</h3>
        {/* <Piechart /> */}
        {/* <Barchart /> */}
        <Acpcwisegr />
      </div>

     
    
    </div>
  );
}

export default FIRREPORT;
