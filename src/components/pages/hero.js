import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"


const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "k-mitch-hodge-2OYrdjM0cCk-unsplash.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const backgroundFluidImageStack = [
    data.placeholderImage.childImageSharp.fluid,
    `linear-gradient(rgba(169, 145, 156, 0.6),
    rgba(169, 145, 156, 0.6))`,
  ].reverse()
  return (
    <main className="uk-width-1-1">
      <BackgroundImage fluid={backgroundFluidImageStack} backgroundColor={`#040e18`} className=" uk-width-1-1 uk-background-secondary uk-background-fixed" style={{height:"90vh"}}>
        <div className="uk-text-center uk-position-center">
          <h2 className="uk-h1 uk-text-secondary">Herbal Medicine Consultations</h2>
          <h2 className="uk-h1 uk-text-secondary">Herbal Products</h2>
          <h2 className="uk-h1 uk-text-secondary">Workshops</h2>
          <hr className="uk-background-secondary uk-width-1-6 uk-margin-auto" />
          <h3 className="uk-h3 uk-text-secondary" style={{opacity:"0.9"}}>Falkland, Fife</h3>
        </div>
      </BackgroundImage>
    </main>
  )
}

export default Hero
