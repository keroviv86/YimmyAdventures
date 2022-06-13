import React from 'react'
import "./sidebar.css"
import photo from "../images/kevin&i.png"
import { Instagram} from "@mui/icons-material";

const SideBar = () => {
  return (
    <div className = "sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img src={photo} alt=""/>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, qui facilis consectetur consequuntur laboriosam vitae temporibus exercitationem sed? Sit quo molestiae perspiciatis maiores deleniti quidem nemo inventore provident pariatur facere.
        </p>
      </div>    
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">Fine Dining</li>
        <li className="sidebarListItem">Cooking</li>
        <li className="sidebarListItem">Fashion</li>
        <li className="sidebarListItem">Travel</li>
      </ul>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <div className = "sidebarIcon"><Instagram/></div>
        </div>
      </div>
    </div>

  )
}

export default SideBar