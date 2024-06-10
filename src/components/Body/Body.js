import React from "react";
import "./Body.css";
import Dashboard from "../../pages/Dashboard/Dashboard";
import { Link, Outlet } from "react-router-dom";
function Body() {
  return (
    <div className="body">
      <Outlet />
    </div>
  );
}

export default Body;
