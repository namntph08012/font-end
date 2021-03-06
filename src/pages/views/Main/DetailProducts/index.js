import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import {useParams} from 'react-router-dom'



const DetailProducts = ({products}) => {
  const { id } = useParams();
  const product = products.find(product=>product.id === id)
  useEffect(()=>{
    window.scrollTo(0,0)
    },[])
    return (
        <div>
            <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="product__details__pic">
                <div className="product__details__pic__item">
                  <img className="product__details__pic__item--large" src={product.image} alt="" />
                </div>
                <div className="product__details__pic__slider owl-carousel">
                  <img data-imgbigurl="img/product/details/product-details-2.jpg" src="img/product/details/thumb-1.jpg" alt="" />
                  <img data-imgbigurl="img/product/details/product-details-3.jpg" src="img/product/details/thumb-2.jpg" alt="" />
                  <img data-imgbigurl="img/product/details/product-details-5.jpg" src="img/product/details/thumb-3.jpg" alt="" />
                  <img data-imgbigurl="img/product/details/product-details-4.jpg" src="img/product/details/thumb-4.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="product__details__text">
                <h3>{product.name}</h3>
                <div className="product__details__rating">
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star-half-o" />
                  <span>(18 reviews)</span>
                </div>
                <div className="product__details__price">${product.price}</div>
                  <hr></hr>
                <p>{product.detail}</p>
                <hr></hr>
                  <p>{product.status}</p>
                <a href="#" className="primary-btn">ADD TO CARD</a>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="product__details__tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab" aria-selected="true">Description</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab" aria-selected="false">Information</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab" aria-selected="false">Reviews <span>(1)</span></a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                        Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus
                        suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam
                        vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.
                        Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,
                        accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
                        pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula
                        elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus
                        et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
                        vel, ullamcorper sit amet ligula. Proin eget tortor risus.</p>
                      <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
                        elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                        porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
                        nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed
                        porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum
                        sed sit amet dui. Proin eget tortor risus.</p>
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-2" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                        Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
                        Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
                        sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
                        eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
                        sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac
                        diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                        Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                        Proin eget tortor risus.</p>
                      <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
                        elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                        porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
                        nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-3" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                        Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
                        Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
                        sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
                        eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
                        sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac
                        diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                        Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                        Proin eget tortor risus.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}

DetailProducts.propTypes = {

}

export default DetailProducts
