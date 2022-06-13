import React from 'react'
import "./home.css"
import Header from "../../components/header/Header"
import SideBar from "../../components/sidebar/SideBar"
import BlogPosts from "../../components/blogposts/BlogPosts"



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