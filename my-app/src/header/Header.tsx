import React from 'react'
import "./header.css"
import cookies from  "../images/cookies.png"

const Header = () => {
  return (
    <div className = "header">
        <div className = "headerTitles">
            <span className= "HeaderTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img 
        className="headerImg" 
        src= {cookies}
        alt="" 
        />
    </div>
  ) 
}

export default Header