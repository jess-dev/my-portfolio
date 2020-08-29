import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import WhatIDo from "../components/WhatIDo/WhatIDo"
import Portfolio from "../components/Portfolio/Portfolio"
import AboutMe from "../components/AboutMe/AboutMe"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"
import '../styles.css'

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
        <WhatIDo />
        <Portfolio />
        <AboutMe />
        <Contact />
        <Footer />
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
  `