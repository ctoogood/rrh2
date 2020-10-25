import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Instagram = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 6, sort: { order: DESC, fields: timestamp }) {
        edges {
          node {
            timestamp
            localFile {
              id
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)
  return (
    <section>
    <div className="uk-margin-auto" style={{maxWidth:"1000px"}}>
      <h3 className="uk-h1 uk-text-center">Latest Images</h3>
      <div data-uk-grid>
        {data.allInstaNode.edges.map(image => (
          <div key={image.node.localFile.id} className="uk-card uk-card-default uk-card-body uk-width-1-2 uk-width-1-3@s">
          <Img
            className="uk-height-1-1"
            fluid={image.node.localFile.childImageSharp.fluid}
          />
          </div>
        ))}
      </div>
      
    </div>
    <div className="uk-position-relative uk-position-bottom-center uk-margin">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.instagram.com/rosyherbalist/"
      className="uk-button uk-button-primary " style={{backgroundColor:"#B8D1D9"}}
    >
View Instagram
    </a>
    </div>
    </section>
  )
}

export default Instagram
