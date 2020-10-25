import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Product = ({ product }) => {
  const image = product.images[0].localFile.childImageSharp.fluid
  const price = product.priceRange.minVariantPrice.amount
  return (
    <section className="product__main uk-box-shadow-hover-medium">
      <Link className="link " to={`/shop/${product.handle}`}>
        <Img fluid={image} className="product__image" />
        <section className="product__info">
          <h5>{product.title}</h5>
          <h6>£{Number(price).toFixed(2)}</h6>
        </section>
      </Link>
    </section>
  )
}

export default Product
