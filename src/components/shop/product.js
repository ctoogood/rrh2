import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Product = ({ product }) => {
  const image = product.images[0].localFile.childImageSharp.fluid
  const price = product.priceRange.minVariantPrice.amount
  return (
    <section className="uk-box-shadow-hover-large uk-card uk-card-default uk-text-center uk-padding-remove">

        <Link to={`/shop/${product.handle}`} >
            <div className="uk-card-media-top">
            <Img fluid={image} style={{maxHeight:"10rem"}} />
            </div>
            <div className="uk-card-body uk-padding-small-top uk-position-relative">
              <h3 className="uk-card-title uk-margin-remove">{product.title}</h3>
              {product.tags.includes("herbal-infusions") ? ( <p className="uk-margin-remove">Herbal Infusions</p> ):
              product.tags.includes("simple-herbal-infusions") ? ( <p className="uk-margin-remove">Simple Herbal Infusions</p> ): 
              (<p className="uk-margin-remove">{product.productType}</p>)}        
              <p className="uk-text-bold">£{Number(price).toFixed(2)}</p>   
              {!product.availableForSale ? (
              <div className="uk-alert-danger">Out of Stock</div>
              ) : null }
              </div>
              
          </Link>
          </section>
  )
}

export default Product
