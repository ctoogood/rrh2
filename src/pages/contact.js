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
      <SEO title="Contact" />
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
        </section>
      </section>
    </Layout>
  )
}

export default Contact
