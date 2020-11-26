import React from "react"
import Product from "./product"

const ProductList = ({ products }) => {
  return (
    <section className="rrh_grid">
      {products.map(product => (
        <Product product={product} key={product.id} />
      ))}
    </section>
  )
}

export default ProductList
