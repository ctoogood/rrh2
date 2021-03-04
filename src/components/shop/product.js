import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

const Product = ({ product }) => {
  const image = product.images[0].localFile.childImageSharp.fluid
  const price = product.priceRange.minVariantPrice.amount
  return (
    <section className="product__main uk-box-shadow-hover-medium uk-padding-small">
      <Link className="link " to={`/shop/${product.handle}`}>
        <Img fluid={image} className="product__image" />
        <section className="product__info">
          <p><strong>{product.title}</strong><br />
          £{Number(price).toFixed(2)}</p>
        </section>
      </Link>
    </section>
  )
}

export default Product
