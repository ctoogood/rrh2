/* eslint-disable jsx-a11y/no-onchange */

import React, { useContext, useState, useEffect } from "react";
import queryString from "query-string";
import { graphql, Link } from "gatsby";
import CartContext from "../context/CartContext";
import { navigate, useLocation } from "@reach/router";
import BasicProductImageGallery from "../components/shop/imageGallery.js";
import ProductQuantity from "../components/shop/productQuantity";
import Layout from "../components/layout";
import SEO from "../components/seo";

const ProductDetail = (props) => {
  const { getProductById } = useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const { search, origin, pathname } = useLocation();
  const variantId = queryString.parse(search).variant;


  useEffect(() => {
    getProductById(props.data.shopifyProduct.shopifyId).then((result) => {
      setProduct(result);
      setSelectedVariant(
        result.variants.find(({ id }) => id === variantId) || result.variants[0]
      );
    });
  }, []);

  const handleVariantChange = (e) => {
    const newVariant = product?.variants.find((v) => v.id === e.target.value);
    setSelectedVariant(newVariant);
    navigate(
      `${origin}${pathname}?variant=${encodeURIComponent(newVariant.id)}`,
      {
        replace: true,
      }
    );
  };

  return (
    <Layout>
      <SEO title={props.data.shopifyProduct.title} />
      <section className="uk-padding" style={{maxWidth:"1000px", margin:"auto"}}>
      <ul className="uk-breadcrumb" aria-label="breadcrumb">
        <li><Link className="uk-text-primary" to="/shop">Shop</Link></li>
        <li><p className="uk-display-inline">{props.data.shopifyProduct.title}</p></li>
      </ul>
      <div className="productDetail__grid">
        <div>
          <BasicProductImageGallery
            images={props.data.shopifyProduct.images}
            selectedVariantImageId={selectedVariant?.image.id}
          /> 
        </div>
        <div>
          <h1>{props.data.shopifyProduct.title}</h1>
          {product?.availableForSale && !!selectedVariant && (
            <>
              {product.variants.length > 1 && (
                <div>
                  <strong>Select</strong>
                  <select
                    className="uk-margin-small-left uk-select uk-width-small"
                    value={selectedVariant.id}
                    onChange={handleVariantChange}
                  >
                    {product?.variants.map((v) => (
                      <option key={v.id} value={v.id}>
                        {v.title}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              {!!selectedVariant && (
                <>
                  <h3 className="uk-h3 uk-text-muted uk-margin-small">£{selectedVariant.price}</h3>
                  <ProductQuantity
                    available={selectedVariant.available}
                    variantId={selectedVariant.id}
                  />
                </>
              )}
            </>
          )}
        </div>
        </div>
        <h2 className="uk-h2">Description</h2>
        <div dangerouslySetInnerHTML={{__html: props.data.shopifyProduct.descriptionHtml}}></div>
      </section>
    </Layout>
  );
};

export default ProductDetail;

export const ProductPageQuery = graphql`
  query ProductDetailQuery($productId: String) {
    shopifyProduct(shopifyId: { eq: $productId }) {
      title
      shopifyId
      description
      descriptionHtml
      images {
        id
        localFile {
          url
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
`;
