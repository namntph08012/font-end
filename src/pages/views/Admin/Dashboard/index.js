import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';


const Dashboard = ({products,id,idCate,categories,blogs }) => {
  const CountProducts = ()=>{
    const countPro = products.filter(countPro=>countPro.id);
    if(countPro){
        return countPro.length
    }
    else{
        return "0";
    }
}
const CountCate = (idCate)=>{
  const count = categories.filter(count=>count.idCate == idCate);
  if(count){
      return count.length
  }
  else{
      return "0";
  }
}
const CountBlogs = ()=>{
  const countBlogs = blogs.filter(countBlogs=>countBlogs.id);
  if(countBlogs){
      return countBlogs.length
  }
  else{
      return "0";
  }
}
// const CountPrice = ()=>{
//   const countPrice = products.filter(countPrice=>countPrice.price);
//   if(countPrice){
//       return countPrice.length
//   }
//   else{
//       return "0";
//   }
// }
    return (
        <div className="content-wrapper">
        <div className="container-fluid">
          {/* Small boxes (Stat box) */}
          <div className="row">
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>{CountCate(idCate)}</h3>
                  <p>Tổng Danh Mục</p>
                </div>
                <div className="icon">
                  <i className="ion ion-bag" />
                </div>
                <Link className="small-box-footer" to={`/admin/categories`}>Chi Tiết</Link>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-success">
                <div className="inner">
                  <h3>{CountProducts(id)}</h3>
                  <p>Tổng Sản Phẩm</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars" />
                </div>
                <Link className="small-box-footer" to={`/admin/products`}>Chi Tiết</Link>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>10</h3>
                  <p>Tổng Người Dùng</p>
                </div>
                <div className="icon">
                  <i className="ion ion-person-add" />
                </div>
                <Link className="small-box-footer" to={`/admin/products`}>Chi Tiết</Link>
              </div>
            </div>
            {/* ./col */}
            <div className="col-lg-3 col-6">
              {/* small box */}
              <div className="small-box bg-danger">
                <div className="inner">
                  <h3>{CountBlogs(id)}</h3>
                  <p>Tổng Số Bài Viết</p>
                </div>
                <div className="icon">
                  <i className="ion ion-pie-graph" />
                </div>
                <Link className="small-box-footer" to={`/admin/blogs`}>Chi Tiết</Link>
              </div>
            </div>
            {/* ./col */}
          </div>
          </div>
        </div>
    )
}

Dashboard.propTypes = {

}

export default Dashboard
