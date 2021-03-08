import React, {useContext} from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Collection from "../components/shop/collection"

const Shop = (props) => {
  
  return (
    <Layout>
      <SEO
        title="Shop"
        description="Buy herbal balms, herbal syrup, herbal tea online from Rosy Rose Herbalist, based in Falkland, Fife - Scotland"
        slug='/shop'
        />
      <h1 className="uk-h1 uk-margin-medium-top uk-text-center ">Shop</h1>
      <div className="uk-container uk-margin-large">
      <section className="uk-text-center uk-child-width-1-3@s" data-uk-grid>
        {props.data.allShopifyCollection.edges.map(collection => (
          <Collection collection={collection.node} />
        ))}
      </section>
      </div>
      <div className="shop__postage">
        <h2>Postage</h2>
        <p>Orders will be posted within 3 days</p>
      </div>
    </Layout>
  )
}

export default Shop

export const ProductPageQuery = graphql`
  query CollectionDetailQuery {
    allShopifyCollection {
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
}`

// export const ProductPageQuery = graphql`
//   query CollectionDetailQuery {
//     collection1: shopifyCollection(title: {eq: "Herbal Products"}) {
//     title
//     shopifyId
//     handle
//     descriptionHtml
//     description
//     products {
//       images {
//         localFile {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
//   collection2: shopifyCollection(title: {eq: "Potted Herbs"}) {
//     title
//     shopifyId
//     handle
//     descriptionHtml
//     description
//     products {
//       images {
//         localFile {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   } 
//   }
// `;
