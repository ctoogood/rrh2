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
    <section className="uk-height-viewport uk-flex uk-width-1-1 uk-position-absolute uk-overflow-hidden" style={{zIndex:"-1", opacity:"0.08"}}>
      <Img
        className=""
        fluid={data.bgImage2.childImageSharp.fluid}
        style={{width:"100%",
          left:"-30%",
          transform: "rotate(45deg)"}}
      />
      <Img
        className=""
        fluid={data.bgImage2.childImageSharp.fluid}
        style={{width:"100%",
          left:"20%",
          top:"-35%",
          transform: "rotate(225deg)"}}
      />
    </section>
  )
}

export default Background
