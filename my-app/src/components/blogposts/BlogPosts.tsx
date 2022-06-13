import React from 'react'
import "./blogposts.css";
import BlogPost from "../blogpost/BlogPost"

const BlogPosts = () => {
  return (
    <div className="posts">
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
      <BlogPost/>
    </div>
  )
}
export default BlogPosts