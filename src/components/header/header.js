// import React from "react"
// import { Link } from "gatsby"

// const Header = () => {
//   const menuItems = [
//     { title: "Herbal Medicine", link: "/herbalmedicine" },
//     { title: "Workshops", link: "/workshops" },
//     { title: "Consultations", link: "/consultations" },
//     { title: "Shop", link: "/shop" },
//     { title: "Blog", link: "/blog" },
//     { title: "Contact", link: "/contact" },
//   ]
//   return (
//     <div
//       className="uk-container uk-margin-small-top"
//       style={{ height: "5rem" }}
//     >
//       <nav
//         className="uk-navbar-container uk-navbar-transparent uk-hidden@m uk-dark"
//         data-uk-navbar
//       >
//         <div className="uk-navbar-left">
//           <button
//             className="uk-navbar-toggle uk-button"
//             data-uk-navbar-toggle-icon
//             data-uk-toggle="target: #mobile-menu"
//             href="#"
//           >
//             &nbsp;&nbsp;
//           </button>
//         </div>
//         <div className="uk-navbar-center">
//           <Link
//             to="/"
//             className="uk-navbar-item uk-margin-top"
//             style={{ textDecoration: "none" }}
//           >
//             <h4 className="uk-h2">Rosy Rose Herbalist</h4>
//           </Link>
//         </div>
//         <div className="uk-navbar-right">
//           <a href="/cart" className="uk-icon uk-navbar-item" uk-icon="cart" />
//         </div>
//       </nav>
//       <nav
//         className="uk-navbar-container uk-navbar-transparent uk-visible@m"
//         data-uk-navbar
//         style={{ zIndex: "10" }}
//       >
//         <div className="uk-navbar-left uk-position-top-center">
//           <Link
//             to={"/"}
//             className="uk-navbar-item"
//             style={{ textDecoration: "none" }}
//           >
//             <h4 className="uk-h2">Rosy Rose Herbalist</h4>
//           </Link>
//           <ul className="uk-navbar-nav">
//             <li>
//               <a href="#">About</a>
//               <div className="uk-navbar-dropdown" data-offset="-15">
//                 <ul className="uk-nav uk-navbar-dropdown-nav">
//                   <li>
//                     <Link to="/herbalmedicine">Herbal Medicine</Link>
//                   </li>
//                   <li>
//                     <Link to="/consultations">Consultations</Link>
//                   </li>
//                   <li>
//                     <Link to="/workshops">Workshops</Link>
//                   </li>
//                 </ul>
//               </div>
//             </li>
//             <li>
//               <Link to="/shop">Shop</Link>
//             </li>
//             <li>
//               <Link to="/blog">Blog</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//           <div className="uk-navbar-right">
//             <Link
//               to="/cart"
//               className="uk-icon uk-navbar-item uk-text-primary"
//               data-uk-icon="cart"
//             ></Link>
//           </div>
//         </div>
//       </nav>
//       <div id="mobile-menu" data-uk-offcanvas="overlay: true">
//         <div className="uk-offcanvas-bar">
//           <button
//             className="uk-offcanvas-close"
//             type="button"
//             data-uk-close
//             style={{ color: "black" }}
//           />

//           <ul className="uk-nav uk-offcanvas-nav ">
//             {menuItems.map(item => (
//               <li key={item.title}>
//                 <Link className="" to={item.link} style={{ color: "black" }}>
//                   {item.title}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Header

import React from "react"
import { Link } from "gatsby"

import Cart from "../../images/cart.svg"
import Menu from "../../images/menu.svg"

const Header = () => {
  const menuItems = [
    { title: "Herbal Medicine", link: "/herbalmedicine" },
    { title: "Workshops", link: "/workshops" },
    { title: "Consultations", link: "/consultations" },
    { title: "Shop", link: "/shop" },
    { title: "Blog", link: "/blog" },
    { title: "Contact", link: "/contact" },
  ]
  return (
    <div
    // data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky"
    >
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
              className="uk-h2 uk-margin-remove"
              style={{ fontWeight: "bold" }}
            >
              Rosy Rose Herbalist
            </h1>
          </Link>
        </div>
        <div className="uk-navbar-right">
          <Link
            to="/cart"
            className=" uk-navbar-item"
            // data-uk-icon="cart"
          >
            <img src={Cart} alt="" width="20px" />
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
          {/* <div className="uk-navbar-center-right">
            <div>
              <ul className="uk-navbar-nav">
                <li>
                  <Link style={{ fontWeight: "normal" }} to="/shop">
                    Shop
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
        <div className="uk-navbar-right">
          <div>
            <Link to="/cart" className="uk-navbar-item">
              {" "}
              <img src={Cart} alt="" width="20px" />
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
                <Link className="" to={item.link} style={{ color: "black" }}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
