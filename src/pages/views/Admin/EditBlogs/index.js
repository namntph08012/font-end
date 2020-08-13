import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {useParams} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useHistory } from "react-router-dom"
import firebase from "../../../../firebase/index"

const EditBlog = ({blogs,onUpdateBlog}) => {
    let { id } = useParams();
    let history = useHistory();
    const blog = blogs.find(blog => blog.id === id);
    const { register, handleSubmit, errors } = useForm(); // Sử dụng hook form
    const [currentBLog, setCurrentBLog] = useState(blog);
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
                  image: url,
                }
                onUpdateBlog(newData);
                history.push('/admin/blogs');
          })
        })
      }
      else{
                  const newData = {
                  id: id,
                  ...data,
                  image: blog.image
                }
                onUpdateBlog(newData);
                history.push('/admin/blogs');
      }   
    }
    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setCurrentBLog({
            ...setCurrentBLog,
            [name]: value
        })
    }
    return (
        <div>
            <div className="content-wrapper">
        <div className="card-header py-3">
             <h1 className="h3 mb-2 text-gray-800">Edit Blog</h1>
            <form action='' onSubmit ={handleSubmit(onHandleSubmit)}>
            <div className="form-group">
            <label htmlFor="exampleInputEmail1">Tên Bài Viết</label>
            <input 
                    defaultValue={currentBLog.name}
                    onChange = {onHandleChange}
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
            <label htmlFor="exampleInputEmail1">Ảnh Bài Viết</label><br></br>
            <img src={currentBLog.image} width="150px" ></img><br></br><br></br>
            <input 
                    type="file" 
                    onChange = {onHandleChange}
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
                    onChange = {onHandleChange}
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
                    defaultValue={currentBLog.detail}
                    type="textarea"
                    onChange = {onHandleChange}
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
                <button type="submit" className="btn btn-success">Sửa Bài Viết</button>
            </form>
        </div>
    </div> 
        </div>
    )
}

EditBlog.propTypes = {

}

export default EditBlog
