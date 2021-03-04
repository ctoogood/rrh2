import React, {useContext} from "react"
import Layout from "../components/layout"
import Background from "../components/pages/background"
import SEO from "../components/seo"
import ProductList from "../components/shop/productList"
import ProductContext from '../context/ProductContext'


const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <Layout>
      <SEO
        title="Shop"
        description="Buy herbal balms, herbal syrup, herbal tea online from Rosy Rose Herbalist, based in Falkland, Fife - Scotland"
        slug='/shop'
        />
      <h1 className="uk-h1 uk-margin-medium-top uk-text-center ">Shop</h1>
      <Background />
      <ProductList products={products} />
      <div className="shop__postage">
        <h2>Postage</h2>
        <p>Orders will be posted within 3 days</p>
      </div>
    </Layout>
  )
}

export default Shop
