import React from "react"
// import '../styles/main.scss'
import Layout from "../components/layout"
import About from "../components/pages/about"
import Hero from "../components/pages/hero"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" slug='/' />
      <Hero />
      <About />
    </Layout>
  )
}

export default IndexPage
