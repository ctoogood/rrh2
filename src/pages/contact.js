import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Contact = props => {
  const serializers = {
    types: {
      pageSection(props) {
        switch (props.node.style) {
          case "h1":
            return <h1>{props.children}</h1>
          case "h2":
            return <h2>{props.children}</h2>
          case "h3":
            return <h3>{props.children}</h3>
          case "h4":
            return <h4>{props.children}</h4>
          case "h5":
            return <h5>{props.children}</h5>
          case "h6":
            return <h6>{props.children}</h6>
          case "blockquote":
            return <blockquote>{props.children}</blockquote>
          default:
            return <p className="productDetail__body">{props.children}</p>
        }
      },
    },
    marks: {
      link: ({ children, mark }) => <a href={mark.href}>{children}</a>,
    },
  }
  const data = useStaticQuery(graphql`
    query {
      sanityPage(title: { eq: "contact" }) {
        _rawPageSection1
      }
      image2: file(relativePath: { eq: "aloe.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout path={props.location}>
      <SEO title="Contact" slug='/contact'/>
      <section className="herbalmedicine__main">
        <div className="herbalmedicine__title">
          <h1>Contact</h1>
        </div>
        <div className="herbalmedicine__mainimage contact">
          <Img fluid={data.image2.childImageSharp.fluid} />
        </div>
        <section className="workshops__content">
          <div className="page__section">
            <PortableText
              className="about__block"
              blocks={data.sanityPage._rawPageSection1.paragraph}
              serializers={serializers}
            />
          </div>
          <div className="map-responsive">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d931.9083802141249!2d-3.2101307793657163!3d56.252765793066025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4886497daa3c12d9%3A0xf3b218cc029fdaf0!2sRosy%20Rose%20Herbalist!5e0!3m2!1sen!2suk!4v1615149981664!5m2!1sen!2suk" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
          </div>
        </section>
      </section>
    </Layout>
  )
}

export default Contact
