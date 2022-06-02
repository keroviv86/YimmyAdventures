import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className = "header">
        <div className = "headerTitles">
            <span className= "HeaderTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img 
        className="headerImg" 
        src="https://drive.google.com/file/d/1tUWL8cHFTm8NG85u1qE-zHMvM6zxT6m0/view?usp=sharing" 
        alt="" 
        />
    </div>
  ) 
}

export default Header