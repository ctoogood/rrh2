import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"

const Consultations = props => {
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
      sanityPage(title: { eq: "consultations" }) {
        pageSection1 {
          header
        }
        pageSection2 {
          header
        }
        pageSection3 {
          header
        }
        pageSection4 {
          header
        }
        _rawPageSection2
        _rawPageSection3
        _rawPageSection4
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
        prices {
          items {
            header
            details
            cost
          }
          footnote
        }
      }
      image3: file(relativePath: { eq: "flower.png" }) {
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
    <Layout path={props.location}>
      <SEO
        title="Consultations"
        description="Herbal medicine consultations provided by Scottish herbalist Rosy Rose Herbalist, based in Falkland - Fife"
        slug='/consultations'
      />
      <section className="herbalmedicine__main">
        <div className="herbalmedicine__title">
          <h1 className="consultations__title">Consultations</h1>
        </div>
        <div className="herbalmedicine__mainimage">
          <Img
            fluid={data.image3.childImageSharp.fluid}
            alt={data.image3.name}
          />
        </div>
        <section className="consultations__content">
          <div className="page__section">
            <h4>{data.sanityPage.pageSection1.header}</h4>
            <h4>{data.sanityPage.pageSection2.header}</h4>
            <PortableText
              className="about__block"
              blocks={data.sanityPage._rawPageSection2.paragraph}
              serializers={serializers}
            />
            <h4>{data.sanityPage.pageSection3.header}</h4>
            <PortableText
              className="about__block"
              blocks={data.sanityPage._rawPageSection3.paragraph}
              serializers={serializers}
            />
            <h4>{data.sanityPage.pageSection4.header}</h4>
            <PortableText
              className="about__block"
              blocks={data.sanityPage._rawPageSection4.paragraph}
              serializers={serializers}
            />
            <div className="uk-card uk-card-default">
              <div className="uk-card-body uk-text-secondary uk-background-primary">
              <h3 className="uk-card-title uk-text-secondary">Prices</h3>
                <table className="uk-table uk-table-divider">
                  <thead>
                    <tr>
                        <th>Service</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                  <tr>
                      <td>{data.sanityPage.prices[0].items[0].header}({data.sanityPage.prices[0].items[0].details})</td>
                      <td>{data.sanityPage.prices[0].items[0].cost}</td>
                  </tr>
                  <tr>
                      <td>{data.sanityPage.prices[0].items[1].header}({data.sanityPage.prices[0].items[1].details})</td>
                      <td>{data.sanityPage.prices[0].items[1].cost}</td>
                  </tr>
                  <tr>
                      <td>{data.sanityPage.prices[0].items[2].header}({data.sanityPage.prices[0].items[2].details})</td>
                      <td>{data.sanityPage.prices[0].items[2].cost}</td>
                  </tr>
                  <tr>
                      <td>{data.sanityPage.prices[0].items[3].header}({data.sanityPage.prices[0].items[3].details})</td>
                      <td>{data.sanityPage.prices[0].items[3].cost}</td>
                  </tr>
                  <tr>
                      <td>{data.sanityPage.prices[0].items[4].header}({data.sanityPage.prices[0].items[4].details})</td>
                      <td>{data.sanityPage.prices[0].items[4].cost}</td>
                  </tr>
                  <tr>
                      <td>{data.sanityPage.prices[0].items[5].header}({data.sanityPage.prices[0].items[5].details})</td>
                      <td>{data.sanityPage.prices[0].items[5].cost}</td>
                  </tr>
                </tbody>
                  <p className="uk-text-secondary">
                    <em>{data.sanityPage.prices[0].footnote}</em>
                  </p>
                </table>
              </div>
            </div>
          </div>
          <div>
            <div className="consultations__images">
              <div className="herbalmedicine__imagecontainer">
                <Img
                  className="herbalmedicine__image"
                  fluid={data.sanityPage.image1.asset.fluid}
                  alt={data.sanityPage.image1desc}
                />
              </div>
              <div className="herbalmedicine__imagecontainer">
                <Img
                  className="herbalmedicine__image"
                  fluid={data.sanityPage.image2.asset.fluid}
                  alt={data.sanityPage.image2desc}
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  )
}

export default Consultations
