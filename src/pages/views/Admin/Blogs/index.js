import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
const Blogs = ({onRemoveBlog,blogs}) => {
    const removeHandleBlog = (id) => {
        onRemoveBlog(id);
    }
    return (
        <div>
            <div>
            <div className="content-wrapper">
            <div className="table-responsive">
            <table className="table">
          <thead>
              <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Image</th>
                  <th scope="col">Short Detail</th>
                  <th scope="col">Action</th>
                  <th scope="col"></th>

              </tr>
          </thead>
          <tbody>
              {blogs.map(({ id, name, image,shortdetail}, index) => (
                  <tr key={index}>
                      <th scope="row">{index +=1}</th>
                      <td>{name}</td>
                      <td><img src={image} alt="" width="50" /></td>
                      <td>{shortdetail}</td>
                      <td>
                        <Link to={`/admin/blogs/edit/${id}`} className="btn btn-primary">Edit</Link>
                      </td>
                      <td>
                          <button className="btn btn-primary" onClick={() => removeHandleBlog(id)}>Delete</button>
                      </td>
                      
                  </tr>
              ))}
          </tbody>
      </table>
    </div>
  </div>
        </div>
        </div>
    )
}

Blogs.propTypes = {

}

export default Blogs
