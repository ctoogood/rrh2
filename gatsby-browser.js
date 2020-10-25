import './src/styles/main.scss'

import React from "react";
import { ProductContextProvider } from "./src/context/ProductContext";
import { CartContextProvider } from "./src/context/CartContext";

export const wrapRootElement = ({ element }) => (
  <ProductContextProvider>
    <CartContextProvider>{element}</CartContextProvider>
  </ProductContextProvider>
);