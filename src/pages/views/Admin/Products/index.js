import React from 'react'
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';


const ProductsManager = ({ products, onRemove, categories}) => {
    const removeHandle = (id) => {
        onRemove(id);
    }
    const showCate =(idCate) => {
        const category = categories.filter((category) => category.id === idCate);
        if(category != 0){
            const idCate =category[0].name;
            return idCate;
        }
        else{
            return "NO Cate";
        }
    }
    return (
    <div className="content-wrapper">
      <div className="table-responsive">
      <table className="table">
          <thead>
              <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Image</th>
                  <th scope="col">Price</th>
                  <th scope="col">Categories</th>
                  <th scope="col">Action</th>
                  <th scope="col"></th>

              </tr>
          </thead>
          <tbody>
              {products.map(({ id, name, image, price, idCate}, index) => (
                  <tr key={index}>
                      <th scope="row">{index +=1}</th>
                      <td>{name}</td>
                      <td><img src={image} alt="" width="50" /></td>
                      <td>{price}</td>
                      <td>{showCate(idCate)}</td>
                      <td>
                        <Link to={`/admin/products/edit/${id}`} className="btn btn-primary">Edit</Link>
                      </td>
                      <td>
                          <button className="btn btn-primary" onClick={() => removeHandle(id)}>Delete</button>
                      </td>
                      
                  </tr>
              ))}
          </tbody>
      </table>
    </div>
  </div>
    )
}

ProductsManager.propTypes = {

}

export default ProductsManager
