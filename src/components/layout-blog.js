import React from "react"
import Navbar from './Nav/Navbar'
import Footer from './Footer/Footer'
import BlogHeader from "./Jumbotron/BlogHeader"

const BlogLayout = ({ location, title, children }) => {
  return (
    <div className="container">
      <Navbar />
      <BlogHeader />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default BlogLayout
