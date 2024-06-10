import React from "react";
import "./Home.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import Body from "../Body/Body";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div className="home">
      <div className="home-left">
        <Sidebar />
      </div>
      <div className="home-right">
        <Navbar />
        <Body />
      </div>
    </div>
  );
}

export default Home;
