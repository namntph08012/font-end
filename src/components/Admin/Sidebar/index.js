import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';


const Sidebar = props => {
    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* Brand Logo */}
      <Link to="/admin" className="brand-link">
        <img src="../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </Link>
      {/* Sidebar */}
      <div className="sidebar">
        {/* Sidebar user panel (optional) */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src="../dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
          </div>
          <div className="info">
            <a href="#" className="d-block">Alexander Pierce</a>
          </div>
        </div>
        {/* SidebarSearch Form */}
        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw" />
              </button>
            </div>
          </div>
        </div>
        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-edit" />
                <p>
                  Forms
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <Link to="/admin/products/add"><p>Add Products</p></Link>
                  </a>
                </li>
              </ul>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <Link to="/admin/categories/add"><p>Add Categories</p></Link>
                  </a>
                </li>
              </ul>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <Link to="/admin/blogs/add"><p>Add Blog</p></Link>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item has-treeview">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-table" />
                <p>
                  Tables
                  <i className="fas fa-angle-left right" />
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <Link to="/admin/products"><p>Products list</p></Link>
                  </a>
                </li>
              </ul>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <Link to="/admin/categories"><p>Categories list</p></Link>
                  </a>
                </li>
              </ul>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a className="nav-link">
                    <i className="far fa-circle nav-icon" />
                    <Link to="/admin/blogs"><p>Blogs list</p></Link>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* /.sidebar-menu */}
      </div>
      {/* /.sidebar */}
    </aside>
    )
}

Sidebar.propTypes = {

}

export default Sidebar
