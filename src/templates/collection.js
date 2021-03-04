/* eslint-disable jsx-a11y/no-onchange */

import React from "react";
import { graphql } from "gatsby";
import ProductList from "../components/shop/productList"
import Layout from "../components/layout";
import SEO from "../components/seo";

const Collection = (props) => {
  return (
    <Layout>
      <section>
      <SEO title={props.data.shopifyCollection.title} />
      <section className="uk-padding" style={{maxWidth:"1000px", margin:"auto"}}>
        <ul className="uk-breadcrumb" aria-label="breadcrumb">
          <li><p className="uk-display-inline">Shop</p></li>
          <li><p className="uk-display-inline">Collections</p></li>
          <li><p className="uk-display-inline">{props.data.shopifyCollection.title}</p></li>
        </ul>
        <h1 className="uk-h1 uk-margin-medium-top uk-text-center ">{props.data.shopifyCollection.title}</h1>
        <ProductList products={props.data.shopifyCollection.products} />
      </section>
      </section>
    </Layout>
  );
};

export default Collection;

export const CollectionQuery = graphql`
  query CollectionProductsQuery($collectionId: String) {
    shopifyCollection(shopifyId: { eq: $collectionId }) {
      id
      title
      products {
        title
        handle
        id
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