import React from "react";
import CartContents from "../components/cart/cartContents.js";
import Layout from "../components/layout.js";
import SEO from "../components/seo.js";

const Cart = () => {
  return (
    <Layout>
      <SEO title="Cart" />
      <CartContents />
    </Layout>
  );
};

export default Cart;
