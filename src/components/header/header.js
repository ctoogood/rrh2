import React, { useState, useContext } from "react";
import { Link } from "gatsby"
import CartContext from "../../context/CartContext";

import Cart from "../../images/cart.svg"
import Menu from "../../images/menu.svg"

const Header = () => {
  const { checkout } = useContext(CartContext);
  const count = checkout.lineItems.reduce((totalCount, lineItem) => {
    return totalCount + lineItem.quantity;
  }, 0);
  const menuItems = [
    { title: "About", children: [{ title: "Herbal Medicine", link: "/herbalmedicine" }, { title: "Workshops", link: "/workshops" }, { title: "Consultations", link: "/consultations" },] },
    { title: "Shop", children: [{ title: "Herbal Products", link: "/shop/collections/herbal-products"}, { title: "Potted Herbs", link: "/shop/collections/potted-herbs"}] },
    { title: "Blog", link: "/blog" },
    { title: "Contact", link: "/contact" },
  ]
  return (
    <div>
      <nav
        className="uk-navbar-container uk-background-primary uk-padding-top uk-hidden@m"
        style={{ backgroundColor: "white" }}
        data-uk-navbar
      >
        <div className="uk-navbar-left" style={{ backgroundColor: "white" }}>
          <button
            style={{ backgroundColor: "white" }}
            aria-label="Menu Button"
            className="uk-navbar-toggle uk-button"
            data-uk-toggle="target: #mobile-menu"
          >
            {" "}
            <img src={Menu} alt="" width="20px" />
          </button>
        </div>
        <div className="uk-navbar-center">
          <Link className="uk-navbar-item uk-logo" to="/">
            <h1
              className="uk-h2 uk-margin-remove uk-text-center"
            >
              Rosy Rose<br />Herbalist
            </h1>
          </Link>
        </div>
        <div className="uk-navbar-right">
          <Link
            to="/cart"
            className=" uk-navbar-item"
          >
            <img src={Cart} alt="" width="20px" />
            <span class="uk-badge">1</span>
          </Link>
        </div>
      </nav>
      <nav
        className="uk-navbar-container uk-background-primary uk-padding-top uk-visible@m uk-margin-auto"
        style={{
          height: "5rem",
          margin: "auto",
          maxWidth: "1000px",
          backgroundColor: "white",
        }}
        data-uk-navbar
      >
        <div className="uk-navbar-left">
          <Link className="uk-navbar-item uk-logo" to="/">
            <h1 className="uk-h2 uk-margin-remove">Rosy Rose Herbalist</h1>
          </Link>
          <ul className="uk-navbar-nav">
            <li>
              <a href="#">About</a>
              <div className="uk-navbar-dropdown" data-offset="-15">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li>
                    <Link to="/herbalmedicine">Herbal Medicine</Link>
                  </li>
                  <li>
                    <Link to="/consultations">Consultations</Link>
                  </li>
                  <li>
                    <Link to="/workshops">Workshops</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="#">Shop</a>
              <div className="uk-navbar-dropdown" data-offset="-15">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li>
                    <Link to="/shop/collections/herbal-products">Herbal Products</Link>
                  </li>
                  <li>
                    <Link to="/shop/collections/potted-herbs">Potted Herbs</Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <div>
            <Link to="/cart" className="uk-navbar-item">
              {" "}
              <img src={Cart} alt="" width="20px" />
              {count? (
              <span class="uk-badge">{count}</span>
              ): null
              }
            </Link>
          </div>
        </div>
      </nav>
      <div id="mobile-menu" data-uk-offcanvas>
        <div className="uk-offcanvas-bar" style={{ backgroundColor: "white" }}>
          <button
            className="uk-offcanvas-close"
            type="button"
            aria-label="Close"
            data-uk-close
            style={{ color: "black" }}
          />

          <ul className="uk-nav uk-offcanvas-nav ">
            {menuItems.map(item => (
              <li key={item.title}>
                {item.link ? (
                <>
                <Link className="" to={item.link} style={{ color: "black" }}>
                  {item.title}
                </Link>
                </>) : (<p>{item.title}</p>)}
                <ul className="uk-nav-sub">
                {console.log(item)}
                {item?.children?.map(child => (
                  <li key={child.title}>
                    <Link to={child.link} style={{ color: "black" }}>
                  {child.title}
                  </Link>
                </li>
                ))}
                </ul>
                
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
