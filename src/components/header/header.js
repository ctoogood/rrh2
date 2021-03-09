import React, { useContext } from "react";
import { Link } from "gatsby"
import CartContext from "../../context/CartContext";

import Cart from "../../images/cart.svg"
import Menu from "../../images/menu.svg"

const Header = () => {
  const { checkout } = useContext(CartContext);
  const count = checkout?.lineItems?.reduce((totalCount, lineItem) => {
    return totalCount + lineItem.quantity;
  }, 0);
  const menuItems = [
    { 
      title: "About",
      link: "", 
      children: [
        { 
          title: "Herbal Medicine", link: "/herbalmedicine" 
        },
        { 
          title: "Workshops", link: "/workshops" 
        },
        { 
          title: "Consultations", link: "/consultations" 
        },
      ]
    },
    { 
      title: "Shop", 
      link: "/shop",
      children: [
        {
          title: "All",
          link: "/shop"
        },
        { 
          title: "Herbal Products", 
          children: [
            {
              title: "Infusions", link: "/shop/collections/infusions"
            }, 
            {
              title: "Balms", link: "/shop/collections/balms"
            }, 
            {
              title: "Syrup", link: "/shop/collections/syrup"
            }
          ]
        }, 
    { 
      title: "Potted Remedies", link: "/shop/collections/potted-remedies"}] },
    { 
      title: "Blog", 
      link: "/blog" 
    },
    { 
      title: "Contact", 
      link: "/contact" 
    },
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
              className="uk-h2 uk-margin-remove uk-text-center header__logo"
            >
              Rosy Rose<br />Herbalist
            </h1>
          </Link>
        </div>
        <div className="uk-navbar-right">
          <Link to="/cart" className="uk-navbar-item">
              {" "}
              <img src={Cart} alt="" width="20px" />
              {count? (
              <span className="uk-badge">{count}</span>
              ): null
              }
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
            <h1 className="uk-h2 uk-margin-remove header__logo">Rosy Rose Herbalist</h1>
          </Link>
          <ul className="uk-navbar-nav">
          {menuItems.map(item => (
              <li className="uk-text-bold" key={item.title}>
                <Link to={item.link}>
                  {item.title}
                </Link>
                <div className={item.children ? ("uk-navbar-dropdown"): null} data-offset="-15">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                {item?.children?.map(child => (
                  <div key={child.title}>
                  <li className="uk-nav-divider"></li>
                  <li className="uk-text-bold">
                  {child.link ? (
                    <Link className="uk-link" style={{color: "#808080"}} to={child.link} >
                      {child.title}
                    </Link>
                  ) : (
                    <p className="uk-margin-remove">
                      {child.title}
                    </p>
                  )}
                  </li>
                  {child.children?.map(child2 => (
                  <li className="uk-text-small" key={child2.title}>
                    <Link className="uk-link" to={child2.link} >
                      {child2.title}
                    </Link>
                  </li>
                ))}
                </div>
                ))}
                </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="uk-navbar-right">
          <div>
            <Link to="/cart" className="uk-navbar-item">
              {" "}
              <img src={Cart} alt="" width="20px" />
              {count? (
              <span className="uk-badge">{count}</span>
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

          <ul className="uk-nav uk-offcanvas-nav">
              <li className="uk-text-bold">
                <Link to="/" style={{ color: "black" }}>
                  Home
                </Link>
              </li>
            {menuItems.map(item => (
              <li key={item.title}>
                <Link className="uk-text-bold" to={item.link} style={{ color: "black" }}>
                  {item.title}
                </Link>
                <ul className="uk-nav-sub">
                {item?.children?.map(child => (               
                  <div  key={child.title}>
                  <li className="uk-text-bold">
                  {child.link ? (
                    <Link to={child.link} style={{ color: "black" }}>
                      {child.title}
                    </Link>
                  ) : (
                    <p className="uk-margin-remove" style={{ color: "black" }}>
                      {child.title}
                    </p>
                  )}
                  </li>
                  {child.children?.map(child2 => (
                  <li key={child2.title}>
                    <Link to={child2.link} style={{ color: "black" }}>
                      {child2.title}
                    </Link>
                  </li>
                ))}
                </div>
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
