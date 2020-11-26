import "./src/styles/main.scss"

import React from "react"
import { ProductContextProvider } from "./src/context/ProductContext"
import { CartContextProvider } from "./src/context/CartContext"
import UIkit from "uikit"
import Icons from "uikit/dist/js/uikit-icons"

UIkit.use(Icons)

export const wrapRootElement = ({ element }) => (
  <ProductContextProvider>
    <CartContextProvider>{element}</CartContextProvider>
  </ProductContextProvider>
)
