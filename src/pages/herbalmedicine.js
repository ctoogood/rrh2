import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"

const HerbalMedicine = props => {
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
      sanityPage(title: { eq: "herbal medicine" }) {
        pageSection1 {
          header
        }
        pageSection2 {
          header
        }
        pageSection3 {
          header
        }

        _rawPageSection1
        _rawPageSection2
        _rawPageSection3
        blockQuote1
        blockQuote2
        image1 {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
        image1desc
        image2 {
          asset {
            fluid(maxWidth: 500) {
              ...GatsbySanityImageFluid
            }
          }
        }
        image2desc
      }
      image3: file(relativePath: { eq: "calendula.png" }) {
        name
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Herbal Medicine" slug='/herbal-medicine' />
      <section className="herbalmedicine__main">
        <div className="herbalmedicine__title">
          <h1>Herbal Medicine</h1>
        </div>
        <div className="herbalmedicine__mainimage hm">
          <Img
            fluid={data.image3.childImageSharp.fluid}
            alt={data.image3.name}
          />
        </div>
        <section className="herbalmedicine__text">
          <div className="page__section">
            <h4>{data.sanityPage.pageSection1.header}</h4>
            <PortableText
              className="about__block"
              blocks={data.sanityPage._rawPageSection1.paragraph}
              serializers={serializers}
            />
          </div>
          <div className="page__section">
            <blockquote>{data.sanityPage.blockQuote1}</blockquote>
            <div className="herbalmedicine__imagecontainer">
              <Img
                className="herbalmedicine__image"
                fluid={data.sanityPage.image1.asset.fluid}
                alt={data.sanityPage.image1desc}
              />
            </div>
          </div>
          <div className="page__section">
            <div>
              <h4>{data.sanityPage.pageSection2.header}</h4>
              <PortableText
                className="about__block"
                blocks={data.sanityPage._rawPageSection2.paragraph}
                serializers={serializers}
              />
            </div>
            <blockquote>{data.sanityPage.blockQuote2}</blockquote>
          </div>
          <div className="page__section">
            <div className="herbalmedicine__imagecontainer">
              <Img
                className="herbalmedicine__image"
                fluid={data.sanityPage.image2.asset.fluid}
                alt={data.sanityPage.image2desc}
              />
            </div>
            <div>
              <h4>{data.sanityPage.pageSection3.header}</h4>
              <PortableText
                className="about__block"
                blocks={data.sanityPage._rawPageSection3.paragraph}
                serializers={serializers}
              />
            </div>
          </div>
        </section>
      </section>
    </Layout>
  )
}

export default HerbalMedicine
