import React from 'react'
import './topbar.css'
import { Link } from "react-router-dom";
import { Instagram, Search } from "@mui/icons-material";

const TopBar = () => {
  return (
    <div className= "top">
        <div className = "topLeft"><Instagram className = "topIcon"/></div>
        <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {/* {user && <li className="topListItem">LOGOUT</li>} */}
        </ul>
      </div>
        <div className = "topRight">
            <img 
            className = "topImg"
            src="https://storage.googleapis.com/ares-profile-pictures/hd/yimmyadventures-1e20dbd3cf76e22c950a77d75109b47f_hd.jpg"
            alt=""
            />
            <Search className = "topSearchIcon"/>
        </div>
       
    </div>
  )
}

export default TopBar