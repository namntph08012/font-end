import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';


const Header = props => {
    return (
        <div>
            <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="header__top__left">
                  <ul>
                    <li><i className="fa fa-envelope" /> hello@colorlib.com</li>
                    <li>Free Shipping for all Order of $99</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="header__top__right">
                  <div className="header__top__right__social">
                    <a href="#"><i className="fa fa-facebook" /></a>
                    <a href="#"><i className="fa fa-twitter" /></a>
                    <a href="#"><i className="fa fa-linkedin" /></a>
                    <a href="#"><i className="fa fa-pinterest-p" /></a>
                  </div>
                  <div className="header__top__right__language">
                    <img src="img/language.png" alt="" />
                    <div>English</div>
                    <span className="arrow_carrot-down" />
                    <ul>
                      <li><a href="#">Spanis</a></li>
                      <li><a href="#">English</a></li>
                    </ul>
                  </div>
                  <div className="header__top__right__auth">
                    <a href="#"><i className="fa fa-user" /> Login</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="header__logo">
                <Link to={`/about`} ><img src="img/logo.png" alt="" /></Link>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="header__menu">
                <ul>
                <li><Link to={`/`} >HOME</Link></li>

                  <li className="active"><a href="./shop-grid.html">Shop</a></li>
                  {/* <li><a href="#">Pages</a>
                    <ul className="header__menu__dropdown">
                      <li><a href="./shop-details.html">Shop Details</a></li>
                      <li><a href="./shoping-cart.html">Shoping Cart</a></li>
                      <li><a href="./checkout.html">Check Out</a></li>
                      <li><a href="./blog-details.html">Blog Details</a></li>
                    </ul>
                  </li> */}
                  <li><Link to={`/about`} >About</Link></li>
                  <li><Link to={`/blogs`} >Blog</Link></li>
                  {/* <li><a href="./contact.html">Contact</a></li> */}
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
            </div>
          </div>
          <div className="humberger__open">
            <i className="fa fa-bars" />
          </div>
        </div>
      </header>
        </div>
    )
}

Header.propTypes = {

}

export default Header
