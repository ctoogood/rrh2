import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import PortableText from "@sanity/block-content-to-react"
import Background from "./background"

const About = () => {
  const serializers = {
    types: {
      aboutSection(props) {
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
      aboutSection1: sanityHome(title: { eq: "Home Page" }) {
        _rawAboutSection1
        aboutSection1 {
          aboutHeader
          aboutImage {
            asset {
              fluid(maxWidth: 500) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
      aboutSection2: sanityHome(title: { eq: "Home Page" }) {
        _rawAboutSection2
        aboutSection2 {
          aboutHeader
          linkTo {
            title
          }
          aboutImage {
            asset {
              fluid(maxWidth: 500) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
      collections: allShopifyCollection {
        edges {
          node {
            shopifyId
            description
            descriptionHtml
            handle
            title
            products {
              images {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
      aboutProducts: allSanityHome {
        edges {
          node {
            aboutProducts {
              productTitle
              overlayColor
              linkTo {
                slug {
                  current
                }
              }
              productImage {
                asset {
                  fluid {
                    ...GatsbySanityImageFluid
                  }
                }
              }
            }
          }
        }
      }
      aboutSection3: sanityHome(title: { eq: "Home Page" }) {
        _rawAboutSection3
        aboutSection3 {
          aboutHeader
          linkTo {
            title
          }
          aboutImage {
            asset {
              fluid(maxWidth: 500) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <section className="about__main uk-position-relative">
      <Background />
      <div className="uk-section">
    <div className="uk-container uk-width-3-4@m uk-text-center uk-text-left@s">
      <section>
        <h3 className="uk-h2 uk-text-muted">{data.aboutSection1.aboutSection1.aboutHeader}</h3>
        </section>
        <section className="uk-grid-small uk-grid uk-flex-row-reverse">
          <section className="uk-height-medium uk-width-1-3@s">
            <Img
              className="uk-height-medium uk-width-1-1"
              fluid={data.aboutSection1.aboutSection1.aboutImage.asset.fluid}
            />
          </section>
          <section className="uk-width-2-3@s uk-margin-top">
            <PortableText
              className="about__block"
              blocks={data.aboutSection1._rawAboutSection1.aboutText}
              serializers={serializers}
            />
          </section>
        </section>
        

    </div>
</div>
      <div className="uk-text-center uk-margin-auto uk-padding-large" style={{maxWidth: "800px"}}>
        <div data-uk-grid>
          <div className="uk-card uk-text-left@s uk-width-1-2@m">
            <h2 className="uk-h1 uk-text-muted">{data.aboutSection2.aboutSection2.aboutHeader}</h2>
            <hr />
            <PortableText
              className="about__block"
              blocks={data.aboutSection2._rawAboutSection2.aboutText}
              serializers={serializers}
            />
          </div>
          <div className="uk-card uk-width-1-2@m">
          <Img
            className="uk-width-medium uk-margin-auto"
            fluid={data.aboutSection2.aboutSection2.aboutImage.asset.fluid}
            style={{zIndex:"-1", opacity:"0.5"}}
          />
          </div>
        </div>
        <Link to={`/${data.aboutSection2.aboutSection2.linkTo.title}`}>
        <button
          className="uk-button uk-button-primary"
        >Find Out More</button>
        </Link>
      </div>
      <div className="uk-text-center uk-margin-auto uk-margin-large-top uk-padding-large" style={{maxWidth: "900px"}}>
        <div data-uk-grid>
          <div className="uk-card uk-text-left@s uk-width-1-2@m">
            <h2 className="uk-h1 uk-text-muted">{data.aboutSection3.aboutSection3.aboutHeader}</h2>
            <hr />
            <PortableText
              className="about__block"
              blocks={data.aboutSection3._rawAboutSection3.aboutText}
              serializers={serializers}
            />
          </div>
          <div className="uk-card uk-width-1-2@m">
          <Img
            className="uk-width-medium uk-margin-auto"
            fluid={data.aboutSection3.aboutSection3.aboutImage.asset.fluid}
          />
          </div>
        </div>
        <Link to={`/herbalmedicine`}>
        <button
          className="uk-button uk-button-primary" style={{backgroundColor:"#B8D1D9"}}
        >Find Out More</button>
        </Link>
      </div>
    </section>
  )
}

export default About
