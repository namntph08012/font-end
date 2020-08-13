import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch,Link, } from 'react-router-dom';
import {useParams} from 'react-router-dom'


const ShowProducts = ({products,categories}) => {
    let {id} = useParams();
    console.log(id);
    return (
        <div>
        {/* Breadcrumb Section End */}
        {/* Product Section Begin */}
        <section className="product spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-5">
                <div className="sidebar">
                  <div className="sidebar__item">
                    <h4>Department</h4>
                    <ul>
                    {categories.map(({name}, index) => (
                      <li><a><Link to ={`/showproducts/${id}`}>{name}</Link></a></li>
                    ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-9 col-md-7">
                <div className="row">
                  {products.map((product, index) => {
                    if(product.idCate==id){
                       return(
                        <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="product__item">
                        <div className="product__item__pic set-bg" >
                        <img src={product.image}></img>
                        <ul className="product__item__pic__hover">
                          <li><a href="#"><i className="fa fa-heart" /></a></li>
                          <li><Link to={`/detailproducts/${product.id}`}><i className="fa fa-retweet" /></Link></li>
                          <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                        </ul>
                        </div>
                        <div className="product__item__text">
                        <h6><Link to={`/detailproducts/${product.id}`}>{product.name}</Link></h6>
                        <h5>$ {product.price}</h5>
                        </div>
                        </div>
                    </div>
                    ) 
                    }
                    }
                  )} 
                </div>
                <div className="product__pagination">
                  <a href="#">1</a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#"><i className="fa fa-long-arrow-right" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    )
}

ShowProducts.propTypes = {

}

export default ShowProducts
