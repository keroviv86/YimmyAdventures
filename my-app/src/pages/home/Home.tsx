import React from 'react'
import "./home.css"
import Header from "../../header/Header"
import SideBar from "../../sidebar/SideBar"




const Home = () => {
  return (
    <div className = "home">
        <Header/>
        <div className="home">
         
          <SideBar/>
        </div>
    </div>
  )
}

export default Home