import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {useParams} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useHistory } from "react-router-dom"
import firebase from "../../../../firebase/index"

const EditCategories = ({categories, onUpdateCate}) => {
    let { id } = useParams();
    let history = useHistory();
    const category = categories.find(category => category.id === id);
    const { register, handleSubmit, errors } = useForm(); // Sử dụng hook form
    const [currentCategory, setCurrentCategory] = useState(category);
    const onHandleSubmit = (data) => {
      let file = data.image[0];
      if(file){
        // create reference in firebase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // upload image
        storageRef.put(file).then(function(){
          storageRef.getDownloadURL().then((url)=>{
            console.log(url);
                // get input value
                const newData = {
                  id: id,
                  ...data,
                  image: url
                }
                onUpdateCate(newData);
                history.push('/admin/categories');
          })
        })
      }
      else{
                  const newData = {
                  id: id,
                  ...data,
                  image: category.image,
                }
                onUpdateCate(newData);
                history.push('/admin/categories');
      }   
    }
    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setCurrentCategory({
            ...setCurrentCategory,
            [name]: value
        })
    }
      return (
          <div className="content-wrapper">
          <div className="card-header py-3">
               <h1 className="h3 mb-2 text-gray-800">Edit Categories</h1>
              <form action='' onSubmit ={handleSubmit(onHandleSubmit)}>
              <div className="form-group">
              <label htmlFor="exampleInputEmail1">Tên Danh Mục</label>
              <input   
                      defaultValue={currentCategory.name}
                      onChange = {onHandleChange}
                      type="text" className="form-control" 
                      placeholder="Tên Danh Mục"
                      name ="name"
                      ref={register({
                        required: "Hãy nhập tên sản phẩm",
                        minLength: 5,
                        pattern: /([^\s])/,
                      })}
              />
               {errors.name && errors.name.message}
               {errors.name && errors.name.type === "minLength" && <p>Nhập tối thiểu 5 ký tự</p>}
               {errors.name && errors.name.type === "pattern" && <p>Không nhập dấu cách</p>}
              </div>
              <div className="form-group">
              <label htmlFor="exampleInputEmail1">Ảnh Danh Mục</label><br></br>
              <img src={currentCategory.image} width="150px" ></img><br></br><br></br>
              <input   
                      // defaultValue={currentProduct.image}
                      onChange = {onHandleChange}
                      type="file" 
                      className="form-control"  
                      placeholder="Ảnh Danh Mục" 
                      name="image"
                      ref={register({
                          minLength: 5,
                          pattern: /([^\s])/,
                        })}
              />
              {errors.image && errors.image.message}
              {errors.image && errors.image.type === "minLength" && <p>Yêu cầu chọn ảnh</p>}
              {errors.name && errors.image.type === "pattern" && <p>Không nhập dấu cách</p>}
              
              </div>
              {/* <div className="form-group">
              <label htmlFor="exampleInputEmail1">Giá sản phẩm</label>
              <input  
                      defaultValue={currentProduct.price}
                      onChange = {onHandleChange}
                      type="text" 
                      className="form-control"  
                      placeholder="Giá Sản Phẩm" 
                      name="price"
                      ref={register({
                          required: "Hãy nhập Giá sản phẩm",
                          minLength: 5,
                          pattern:{
                              value: /^\d{0,10}$/,
                              pattern: /([^\s])/,
                          }
                        })}
              />
              {errors.price && errors.price.message}
              {errors.price && errors.price.type === "minLength" && <p>Nhập tối thiểu 5 ký tự</p>}
              {errors.price && errors.price.type === "pattern" && <p>Nhập Số</p>}
              {errors.name && errors.price.type === "pattern" && <p>Không nhập dấu cách</p>}
              </div> */}
          <button type="submit" className="btn btn-success">UpDate</button>
        </form>
      </div>
      </div>
      )
}

EditCategories.propTypes = {

}

export default EditCategories
