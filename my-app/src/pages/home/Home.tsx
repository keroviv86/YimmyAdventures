import React from 'react'
import "./home.css"
import Header from "../../header/Header"
import SideBar from "../../sidebar/SideBar"
import BlogPosts from "../../blogposts/BlogPosts"



const Home = () => {
  return (
    <>
      <Header />
      <div className="home">

        <BlogPosts />
        <SideBar />
      </div>
    </>
  )
}

export default Home