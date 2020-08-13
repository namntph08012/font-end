import React, {useState} from 'react'
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import firebase from "../../../../firebase/index"

const AddBlogs =({onAddBlog}) => {
    const { register, handleSubmit, errors } = useForm(); // Sử dụng hook form
    let history = useHistory();
    const onHandleSubmit = (data) => {
      let file = data.image[0];
        // create reference in firebase
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        // upload image
        storageRef.put(file).then(function(){
          storageRef.getDownloadURL().then((url)=>{
            console.log(url);
                // get input value
                const newData = {
                  id: Math.random().toString(36).substr(2, 9),
                  ...data,
                  image: url
                }
                onAddBlog(newData);
                history.push('/admin/blogs');
          })
        })     
    }
    return (
        <div>
        <div className="content-wrapper">
        <div className="card-header py-3">
             <h1 className="h3 mb-2 text-gray-800">AddBlog</h1>
            <form action='' onSubmit ={handleSubmit(onHandleSubmit)}>
            <div className="form-group">
            <label htmlFor="exampleInputEmail1">Tên Bài Viết</label>
            <input  
                    type="text" className="form-control" 
                    placeholder="Tên Bài Viết" 
                    name ="name"
                    ref={register({
                      required: "Hãy nhập Tên bài viết",
                      minLength: 5,
                      pattern: /([^\s])/,
                    })}
            />
             {errors.name && errors.name.message}
             {errors.name && errors.name.type === "minLength" && <p>Nhập tối thiểu 5 ký tự</p>}
             {errors.name && errors.name.type === "pattern" && <p>Không nhập dấu cách</p>}
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputEmail1">Ảnh Bài Viết</label>
            <input 
                    type="file" 
                    className="form-control"  
                    placeholder="Ảnh Bài Viết" 
                    name="image"
                    ref={register({
                        required: "Hãy nhập ảnh",
                        minLength: 5,
                        pattern: /([^\s])/,
                      })}
            />
            {errors.image && errors.image.message}
            {errors.image && errors.image.type === "minLength" && <p>Yêu cầu chọn ảnh</p>}
            {errors.name && errors.image.type === "pattern" && <p>Không nhập dấu cách</p>}
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputEmail1">Nội Dung Ngắn</label>
            <textarea  
                    type="textarea" 
                    className="form-control" 
                    rows="3" 
                    placeholder="Nội Dung Bài Viết" 
                    name="shortdetail"
                    ref={register({
                        required: "Hãy nhập Nội dung bài viết",
                        minLength: 5,
                        maxLength:100,
                        pattern:{
                            pattern: /([^\s])/,
                        }
                        
                      })}
            />
            {errors.price && errors.shortdetail.message}
            {errors.price && errors.shortdetail.type === "minLength" && <p>Nhập tối thiểu 5 ký tự</p>}
            {errors.price && errors.shortdetail.type === "maxLength" && <p>Nhập tối đa 100 ký tự</p>}
            {errors.name && errors.shortdetail.type === "pattern" && <p>Không nhập dấu cách</p>}
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputEmail1">Nội Dung Bài Viết</label>
            <textarea  
                    type="textarea" 
                    className="form-control" 
                    rows="3" 
                    placeholder="Nội Dung Bài Viết" 
                    name="detail"
                    ref={register({
                        required: "Hãy nhập Nội dung bài viết",
                        minLength: 5,
                        pattern:{
                            pattern: /([^\s])/,
                        }
                        
                      })}
            />
            {errors.price && errors.detail.message}
            {errors.price && errors.detail.type === "minLength" && <p>Nhập tối thiểu 5 ký tự</p>}
            {errors.name && errors.detail.type === "pattern" && <p>Không nhập dấu cách</p>}
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
                <button type="submit" className="btn btn-success">Thêm Bài Viết</button>
            </form>
        </div>
    </div> 
        </div>
    )
}

AddBlogs.propTypes = {

}

export default AddBlogs
