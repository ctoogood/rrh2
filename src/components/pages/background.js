import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Background = () => {
  const data = useStaticQuery(graphql`
    query {
      bgImage1: file(relativePath: { eq: "calendula.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bgImage2: file(relativePath: { eq: "lemonbalm.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section className="background__main">
      <Img
        className="background__image"
        fluid={data.bgImage2.childImageSharp.fluid}
      />
      <Img
        className="background__image"
        fluid={data.bgImage2.childImageSharp.fluid}
      />
    </section>
  )
}

export default Background
