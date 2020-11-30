// import React, { useContext } from "react";
// import CartContext from "../../context/CartContext"
// import { navigate } from "@reach/router";

// import RemoveItem from "./removeItem";
// import QuantityAdjuster from "./quantityAdjuster";

// const CartContents = () => {
//   const { checkout, updateLineItem } = useContext(CartContext);

//   const handleAdjustQuantity = ({ quantity, variantId }) => {
//     updateLineItem({ quantity, variantId });
//   };

//   return (
//     <section className="uk-margin-auto" style={{maxWidth:"1000px"}}>
//       <h1>Your Cart</h1>
//       {!!checkout?.lineItems.length && (
//         <div className="cart__header">
//           <div>Product</div>
//           <div>Unit Price</div>
//           <div>Quantity</div>
//           <div>Amount</div>
//         </div>
//       )}
//       {checkout?.lineItems?.map((item) => (
//         <div className="cart__item uk-padding-small" key={item.variant.id}>
//           <div className="cart__item__product">
//             <img alt="product" src={item.variant.image.src} />
//             <div>
//               <strong>{item.title}</strong>
//               <div>
//                 {item.variant.title === "Default Title"
//                   ? ""
//                   : item.variant.title}
//               </div>
//             </div>
//           </div>
//           <div>£{item.variant.price}</div>
//           <div>
//             <QuantityAdjuster item={item} onAdjust={handleAdjustQuantity} />
//           </div>
//           <div>£{(item.quantity * item.variant.price).toFixed(2)}</div>
//           <div>
//             <RemoveItem lineItemId={item.id} />
//           </div>
//         </div>
//       ))}
//       {!!checkout?.lineItems.length && (
//         <div className="cart__total">
//           <div>
//             <strong>Total:</strong>
//           </div>
//           <div>
//             <span>£{checkout?.totalPrice}</span>
//           </div>
//         </div>
//       )}
//       {!checkout?.lineItems.length && <h4>Your cart is empty</h4>}
//       <footer className="cart__footer">
//         <div>
//           <button className="uk-button" onClick={() => navigate(-1)}>Continue Shopping</button>
//         </div>
//         <div>
//           {!!checkout?.lineItems.length && (
//             <button
//               className="uk-button uk-button-primary"
//               onClick={() => {
//                 window.location.href = checkout.webUrl;
//               }}
//             >
//               Checkout
//             </button>
//           )}
//         </div>
//       </footer>
//     </section>
//   );
// };

// export default CartContents;

import React, { useContext } from "react"
import CartContext from "../../context/CartContext"
import { Link } from "gatsby"
import QuantityAdjuster from "./quantityAdjuster"

const CartContents = () => {
  const { checkout, updateLineItem } = useContext(CartContext)

  const handleAdjustQuantity = ({ quantity, variantId }) => {
    updateLineItem({ quantity, variantId })
  }

  const quantities = checkout?.lineItems.map(item => {
    return item.quantity
  })

  const total = quantities?.reduce((a, b) => {
    return a + b
  }, 0)

  return (
    <section
      className="uk-margin-auto uk-text-center"
      style={{ maxWidth: "1000px", minHeight: "50vh" }}
    >
      <h1 className="uk-margin-top">Your Cart</h1>
      <hr />
      {/* {!!checkout?.lineItems.length && (
        <div className="cart__header">
          <div>Product</div>
          <div>Unit Price</div>
          <div>Quantity</div>
          <div>Amount</div>
        </div>
      )} */}
      {checkout?.lineItems?.map(item => (
        <div className="cart__item uk-padding-small-top" key={item.variant.id}>
          <div className="cart__item__product">
            {console.log(item)}
            <img alt="product" src={item.variant.image.src} />
            <div>
              <h3 className="uk-margin-remove">{item.title}</h3>
              <div>
                <p className="uk-text-muted uk-margin-remove">
                  {item.variant.title === "Default Title"
                    ? ""
                    : item.variant.title}
                </p>
                <div>
                  <p className="uk-margin-remove">£{item.variant.price}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="cart__quantity">
              <QuantityAdjuster item={item} onAdjust={handleAdjustQuantity} />
            </div>
            <div>
              <h3 className="">
                £{(item.quantity * item.variant.price).toFixed(2)}
              </h3>
            </div>
          </div>
          {/* <div>
            <RemoveItem lineItemId={item.id} />
          </div> */}
          <hr />
        </div>
      ))}
      {!!checkout?.lineItems.length && (
        <div>
          <h1 className="uk-h3">Your Order</h1>

          <div className="cart__total uk-text-center">
            <div>
              <strong>{total} Items</strong>
            </div>
            <div>
              <h2 className="uk-h2">£{checkout?.totalPrice}</h2>
            </div>
          </div>
        </div>
      )}
      {!checkout?.lineItems.length && (
        <div className="uk-text-center">
          <h4 className="uk-h2">Your cart is empty</h4>
          <div>
            <Link to="/shop">
              <button className="uk-button uk-button-secondary">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      )}
      {!!checkout?.lineItems.length && (
        <footer className="cart__footer">
          <div>
            <button
              className="uk-button uk-button-primary"
              onClick={() => {
                window.location.href = checkout.webUrl
              }}
            >
              Checkout
            </button>
          </div>
        </footer>
      )}
    </section>
  )
}

export default CartContents
