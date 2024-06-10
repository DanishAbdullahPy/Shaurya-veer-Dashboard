import React, { useState, useContext } from "react";
import { AuthContext } from "../../components/Context/AuthContext";
import { useParams } from "react-router-dom";
import "./sidebar.css";
import {
  AiOutlineAudit,
  AiOutlineMessage,
  AiOutlineShopping,
  AiOutlineShoppingCart,
  AiOutlinePieChart,
} from "react-icons/ai";
import { LuLayoutDashboard,LuTable2,LuMapPin,LuClipboardEdit, LuReceipt,LuRadar,LuAlbum,LuShield,LuBoomBox,LuCar, LuWarehouse, LuUsers, LuMap, LuLayoutGrid } from "react-icons/lu";
import { TfiWrite } from "react-icons/lu";
import { GrUserPolice } from "react-icons/lu";
import { BsSafe2 } from "react-icons/lu";
import { AiFillAlert } from "react-icons/lu";
import { GrMap } from "react-icons/lu";
import { AiFillRedditCircle } from "react-icons/lu";
import { GiCaptainHatProfile } from "react-icons/lu";
import { AiOutlineProfile } from "react-icons/lu";
import { CiMap } from "react-icons/lu";
import { MdMenu } from "react-icons/lu";
import { Link } from "react-router-dom";

function Sidebar() {
  const user = useContext(AuthContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className={isSidebarOpen ? "open" : "sidebar"}>
      <div className="sidebar-logo">
        <h1>EMS</h1>
        <i onClick={handleToggleSidebar}>
          <LuLayoutGrid />
        </i>
      </div>

      <div className="sidebar-links">
        <Link to="/" onClick={() => user.setUser("Dashboard")}>
          <i>
            <LuLayoutDashboard />
          </i>
          <span>Dashboard</span>
        </Link>
{/* 
        <Link to="testreport" onClick={() => user.setUser("TEST REPORT")}>
          <i>
            <LuTable2 />
          </i>
          <span>TEST REPORT</span>
        </Link> */}

        <Link to="/map" onClick={() => user.setUser("Geomap")}>
          <i>
            <LuMapPin />
          </i>
          <span>Geo Map</span>
        </Link>

        <Link to="firreport" onClick={() => user.setUser("FIR REPORT")}>
          <i>
            <LuClipboardEdit />
          </i>
          <span>FIR REPORT</span>
        </Link>
        <Link to="seizurereport" onClick={() => user.setUser("SEIZURE REPORT")}>
          <i>
            <LuReceipt />
          </i>
          <span>SEIZURE REPORT</span>
        </Link>
        <Link to="politics" onClick={() => user.setUser("POLITICS REPORT")}>
          <i>
            <LuRadar />
          </i>
          <span>POLITICS REPORT</span>
        </Link>

        <Link to="/regulations" onClick={() => user.setUser("Do's and Dont's")}>
          <i>
            <LuAlbum />
          </i>

          <span>Rules</span>
        </Link>

        <Link to="duty" onClick={() => user.setUser("Duty")}>
          <i>
            <LuShield />
          </i>
          <span>Duty</span>
        </Link>
       

        <Link to="dpo" onClick={() => user.setUser("DPO")}>
          <i>
            <LuCar />
          </i>

          <span> DPO</span>
        </Link>

        <Link to="policestation" onClick={() => user.setUser("POLICE STATION")}>
          <i>
            <LuWarehouse />
          </i>
          <span>POLICE STATION</span>
        </Link>

        <Link to="sectorpolice" onClick={() => user.setUser("SECTORPOLICE")}>
          <i>
            <LuUsers />
          </i>
          <span>SECTORPOLICE</span>
        </Link>

        <Link to="colorbooth" onClick={() => user.setUser("COLOR BOOTH")}>
          <i>
            <LuMap />
          </i>
          <span>COLOR BOOTH</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
