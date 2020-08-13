import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';

const Categories = ({ categories, onRemoveCate, products}) => {
    const CountProducts = (id)=>{
        const count = products.filter(count=>count.idCate == id);
        if(count){
            return count.length
        }
        else{
            return "0";
        }
    } 
    const removeHandleCate = (id) => {
        onRemoveCate(id);
    }
    return (
    <div>
            <div className="content-wrapper">
            <div className="table-responsive">
            <table className="table">
          <thead>
              <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Image</th>
                  <th scope="col">Count</th>
                  <th scope="col">Action</th>
                  <th scope="col"></th>

              </tr>
          </thead>
          <tbody>
              {categories.map(({ id, name, image, idCate}, index) => (
                  <tr key={index}>
                      <th scope="row">{index +=1}</th>
                      <td>{name}</td>
                      <td><img src={image} alt="" width="50" /></td>
                      <td>{CountProducts(id)}</td>
                      <td>
                        <Link to={`/admin/categories/edit/${id}`} className="btn btn-primary">Edit</Link>
                      </td>
                      <td>
                          <button className="btn btn-primary" onClick={() => removeHandleCate(id)}>Delete</button>
                      </td>
                      
                  </tr>
              ))}
          </tbody>
      </table>
    </div>
  </div>
        </div>
    )
}

Categories.propTypes = {

}

export default Categories
