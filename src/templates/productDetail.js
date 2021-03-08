/* eslint-disable jsx-a11y/no-onchange */

import React, { useContext, useState, useEffect } from "react";
import queryString from "query-string";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image"
import CartContext from "../context/CartContext";
import { navigate, useLocation } from "@reach/router";
import BasicProductImageGallery from "../components/shop/imageGallery.js";
import ProductQuantity from "../components/shop/productQuantity";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Share from '../components/utils/share';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import {
    faStoreAlt,
    faCube
  } from '@fortawesome/free-solid-svg-icons'

const ProductDetail = (props) => {
  const { getProductById } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const { search, origin, pathname } = useLocation();
  const variantId = queryString.parse(search).variant;


  useEffect(() => {
    async function fetchProduct() {
    setLoading(true)
    await getProductById(props.data.shopifyProduct.shopifyId).then((result) => {
      setProduct(result);
      setSelectedVariant(
        result.variants.find(({ id }) => id === variantId) || result.variants[0]
      );
      setLoading(false)
    });
  }
  fetchProduct()
  }, []);

  const handleVariantChange = async (e) => {
    const newVariant = product?.variants.find((v) => v.id === e.target.value);
    setLoading(true)
    await setSelectedVariant(newVariant);
    navigate(
      `${origin}${pathname}?variant=${encodeURIComponent(newVariant.id)}`,
      {
        replace: true,
      }
    );
    setLoading(false)
  };
  const title = props.data.shopifyProduct.title; 
  const description = props.data.shopifyProduct.description
  const image = props.data.shopifyProduct.images[0].localFile.url
  const slug = props.data.shopifyProduct.handle
  const item = props.data.shopifyProduct

  return (
    <Layout>
      <SEO title={title} slug={`/${slug}`} description={description} image={image}>
      <script type='application/ld+json'>
					{`{
						'@context': "https://schema.org",
						'@type': "Product",
            'name': "${title}",
            'image': "${image}",
						'description': "${description}",
            'brand': {
              '@type': "Brand",
              'name': "${item.vendor}",
            },
            "offers": {
              "@type": "Offer",
              "url": "${props.data.site.siteMetadata.siteUrl}/${slug}",
              "priceCurrency": "GBP",
              "price": "${item.variants[0].price}",
              "itemCondition": "https://schema.org/NewCondition",
              "availability": "${item.availableForSale ? ("https://schema.org/InStock") : ("https://schema.org/OutOfStock")}"
            }
					}`}
				</script>
      </SEO>
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
          <h1 className="uk-margin-remove">{props.data.shopifyProduct.title}</h1>
          {props.data.shopifyProduct.tags.includes("herbal-infusions") ? ( <p className="uk-margin-remove">Herbal Infusions</p> ): null}
          {loading ? (<div data-uk-spinner></div>) : (
          <>
          {product?.availableForSale && !!selectedVariant ? (
            <>
              {product.variants.length > 1 && (
                <div>
                  <strong>Select </strong>
                  <select
                    className="uk-select uk-margin-small-leftdata--select uk-width-small"
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
                  {props.data.shopifyProduct.tags.includes('click-and-collect-only') ? (
                    <div className="uk-margin-small" data-uk-tooltip="This product is only available for collection, please select pickup during checkout.  Delivery is not available">
                    <FontAwesomeIcon className="button inline" icon={faStoreAlt} />
                    <p className="uk-margin-small-left uk-text-bold uk-display-inline" >Click and Collect Only</p>
                    </div>
                    ) : 
                    props.data.shopifyProduct.tags.includes('uk-delivery', 'click-and-collect') ? (
                      <>
                      <div className="uk-margin-small">
                        <FontAwesomeIcon className="button inline" icon={faCube} />
                        <p className="uk-margin-small-left uk-text-bold uk-display-inline" >Home Delivery(UK & Ireland)</p>
                      </div>
                      <div className="uk-margin-small">
                        <FontAwesomeIcon className="button inline" icon={faStoreAlt} />
                        <p className="uk-margin-small-left uk-text-bold uk-display-inline" >Click and Collect</p>
                      </div>
                      </>
                    ) :
                    props.data.shopifyProduct.tags.includes('click-and-collect') ? (
                      <div className="uk-margin-small">
                        <FontAwesomeIcon className="button inline" icon={faStoreAlt} />
                        <p className="uk-margin-small-left uk-text-bold uk-display-inline" >Click and Collect</p>
                      </div>
                    )
                    : null}
                  <ProductQuantity
                    available={selectedVariant.available}
                    variantId={selectedVariant.id}
                  />
                </>
              )}
              
            </>
          ): !product?.availableForSale && !!selectedVariant ? (<p className="uk-text-lead">Currently Unavailable</p>) : null}
          </>)
          }
          </div>
          
        </div>
        
        <div className="uk-margin-top">
                  <h2 className="uk-text-lead">Description</h2>
                <div className="uk-accordion-content">
                  <p id="description" dangerouslySetInnerHTML={{__html: props.data.shopifyProduct.descriptionHtml}}></p>
                </div>
            </div>
        <Share socialConfig={{
                  config: {
                    url: `${props.data.site.siteMetadata.siteUrl}/shop/${slug}`,
                    title,
                  },
                }} />
        <div className="uk-width-1-1">
          <hr />
          <div class="uk-column-1-2@s uk-column-1-3@m">
            <div>
              <h2 className="uk-text-lead">Shipping</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            </div>
            <div>
              <h2 className="uk-text-lead">Returns</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            </div>
            <div>
              <h2 className="uk-text-lead">Payment</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            </div>          
          </div>
        </div>

      </section>
    </Layout>
  );
};

export default ProductDetail;

export const ProductPageQuery = graphql`
  query ProductDetailQuery($productId: String) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    shopifyProduct(shopifyId: { eq: $productId }) {
      title
      handle
      tags
      shopifyId
      description
      descriptionHtml
      availableForSale
      vendor
      variants {
        price
      }
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
