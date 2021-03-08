import React, { useContext, useState } from "react"
import CartContext from "../../context/CartContext"
import { Link } from "gatsby"
import QuantityAdjuster from "./quantityAdjuster"

const CartContents = () => {
  const { checkout, updateLineItem } = useContext(CartContext);
  const [loading, setLoading] = useState(false)


  // const handleAdjustQuantity = ({ quantity, variantId }) => {
  //   updateLineItem({ quantity, variantId })
  // }

  const handleAdjustQuantity = async ({ quantity, variantId }) => {
    try {
    setLoading(true)
    console.log(loading)
    await updateLineItem({ quantity, variantId });
    setLoading(false)
    }
    catch(e) {
      console.log(e)
    }
    
  };

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
      {checkout?.lineItems?.map(item => (
        <div className="cart__item uk-padding-small-top" key={item.variant.id}>
            <div className="cart__item__product">
              <img alt="product" src={item.variant.image.src} />
              <div>
                {console.log(item)}
                <Link to={`/shop/${item.variant.product.handle}`}>
                <h3 className="uk-margin-remove">{item.title}</h3>
                </Link>
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
              {!loading ? (<>£{(item.quantity * item.variant.price).toFixed(2)}</>) : (<div data-uk-spinner></div>)}
              </h3>
            </div>
          </div>
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
              <h2 className="uk-h2">{!loading ? (<>£{checkout?.totalPrice}</>) : (<div data-uk-spinner></div>)}</h2>
            </div>
          </div>
        </div>
      )}
      {!checkout?.lineItems.length && (
        <div className="uk-text-center">
          <p className="uk-text-lead">Your cart is empty</p>
          <div>
            <Link to="/shop">
              <button className="uk-button uk-button-primary uk-text-bold" style={{backgroundColor:"#B8D1D9"}}>
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
