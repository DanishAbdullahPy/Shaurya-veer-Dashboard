import React from "react";
import "./style.css";
import Barchart2v from "./Barghaph2v";
import Piechart from "../../components/charts/Piechart";
import Barchart from "../../components/charts/Barchart";
import Checkpostgr from "./Checkpostgr";
import Liencedgr from "./Licensedgr";
import UnLiencedgr from "./UnLicensedgr";

function SEIZURE() {
  return (
    <div className="seizure">
      <div className="card1">
        <h3>Flying Squad</h3>
        <Barchart2v />
      </div>

      <div className="card2">
        <h3>Checkpost/Areas </h3>
        {/* <Piechart /> */}
        <Checkpostgr />
      </div>

      <div className="table">
        <h3>Warrent Data</h3>
        <Barchart />
      </div>

      <div className="card3">
        <h3>Licensed Arms</h3>
        {/* <Barchart2v /> */}
        <Liencedgr />
        {/* <Checkpostgr /> */}
      </div>

      <div className="card4">
        <h3>UnLicensed Arms</h3>
        {/* <Piechart /> */}
        <UnLiencedgr />
        {/* <Checkpostgr /> */}
      </div>
    </div>
  );
}

export default SEIZURE;
