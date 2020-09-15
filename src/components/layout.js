import React from "react"
import Jumbotron from './Jumbotron/Jumbotron'
import Navbar from './Nav/Navbar'
import Footer from './Footer/Footer'

const Layout = ({ location, title, children }) => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
