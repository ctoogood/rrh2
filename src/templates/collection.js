/* eslint-disable jsx-a11y/no-onchange */

import React from "react";
import { graphql, Link } from "gatsby";
import ProductList from "../components/shop/productList"
import Layout from "../components/layout";
import SEO from "../components/seo";
import Share from "../components/utils/share"

const Collection = (props) => {
  return (
    <Layout>
      <section>
      <SEO title={props.data.shopifyCollection.title} />
      <section className="uk-padding" style={{maxWidth:"1000px", margin:"auto"}}>
        <ul className="uk-breadcrumb" aria-label="breadcrumb">
          <li><Link className="uk-text-primary" to="/shop">Shop</Link></li>
          <li><p className="uk-display-inline">{props.data.shopifyCollection.title}</p></li>
        </ul>
        <h1 className="uk-h1 uk-margin-medium-top uk-text-center ">{props.data.shopifyCollection.title}</h1>
        <p className="uk-text-center">{props.data.shopifyCollection.description}</p>
        <Share socialConfig={{
                  config: {
                    url: `${props.data.site.siteMetadata.siteUrl}/shop/${props.data.shopifyCollection.handle}`,
                    title: props.data.shopifyCollection.title,
                  },
                }} />
        <ProductList products={props.data.shopifyCollection.products} />
      </section>
      </section>
    </Layout>
  );
};

export default Collection;

export const CollectionQuery = graphql`
  query CollectionProductsQuery($collectionId: String) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    shopifyCollection(shopifyId: { eq: $collectionId }) {
      id
      title
      description
      products {
        title
        handle
        id
        tags
        productType
        availableForSale
        priceRange {
          minVariantPrice {
            amount
          }
        }
        images {
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                src
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }  
      }
    }
  }
`;