import React, { useState, useContext } from "react";
import { AuthContext } from "../../components/Context/AuthContext";

import {
  MdOutlineLightMode,
  MdOutlineDarkMode,
  MdNotificationsNone,
} from "react-icons/md";

import "./Navbar.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const Navbar = (props) => {
  const user = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [theam, setTheam] = useState(false);

  const toggleTheam = () => {
    setTheam(!theam);
    // if (theam) {
    // document.body.classList.remove("dark");
    // } else {
    // document.body.classList.add("dark");
    // }
  };

  const handleImageClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="nav-left">
        <h1>{user.user}</h1>
      </div>

      <div className="nav-right">
        {theam ? (
          <i>
            <MdOutlineDarkMode onClick={toggleTheam} />
          </i>
        ) : (
          <i>
            <MdOutlineLightMode onClick={toggleTheam} />
          </i>
        )}

        <div className="dropdown-container">
          <img
            // src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            src="./Delhi_Police_Logo.png"
            alt=""
            onClick={handleImageClick}
          />
          <img
            // src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            src="./eci.png"
            alt=""
            onClick={handleImageClick}
          />
          <img
            // src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            src="./Day_of_india.png"
            alt=""
            onClick={handleImageClick}
          />
          {isOpen && (
            <div className="dropdown-menu">
              <ul>
                <li>General</li>
                <li>Setting</li>

                <li onClick={() => signOut(auth)}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
