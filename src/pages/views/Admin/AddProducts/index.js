import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import firebase from "../../../../firebase/index"

const AddProducts = ({ onAdd,categories }) => {
    const { register, handleSubmit, errors } = useForm(); // Sử dụng hook form
    let history = useHistory();
    const [image, setImage] = useState(null);
    const [url,setUrl] = useState("")
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
                onAdd(newData);
                history.push('/admin/products');
          })
        })     
    }
    return (
        <div className="content-wrapper">
        <div className="card-header py-3">
             <h1 className="h3 mb-2 text-gray-800">Add Product</h1>
            <form action='' onSubmit ={handleSubmit(onHandleSubmit)}>
            <div className="form-group">
            <label htmlFor="exampleInputEmail1">Tên Sản Phẩm</label>
            <input  
                    type="text" className="form-control" 
                    placeholder="Tên Sản Phẩm" 
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
            <label htmlFor="exampleInputEmail1">Ảnh Sản Phẩm</label>
            <input 
                    type="file" 
                    className="form-control"  
                    placeholder="Ảnh Sản Phẩm" 
                    name="image"
                    ref={register({
                        required: "Hãy nhập ảnh",
                        minLength: 5,
                        pattern: /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i
                      })}
            />
            {errors.image && errors.image.message}
            {errors.image && errors.image.type === "minLength" && <p>Yêu cầu chọn ảnh</p>}
            {errors.name && errors.image.type === "pattern" && <p>Không phải ảnh</p>}
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputEmail1">Giá Sản Phẩm</label>
            <input  
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
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputEmail1">Chi Tiết Sản Phẩm</label>
            <textarea  
                    type="textarea" 
                    className="form-control" 
                    rows="3" 
                    placeholder="Chi Tiết Sản Phẩm" 
                    name="detail"
                    ref={register({
                        required: "Hãy nhập Giá sản phẩm",
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
            <div className="form-group">
            <label htmlFor="exampleInputEmail1">Danh mục sản phẩm</label>
            <select class="form-control" 
                    name="idCate"
                    ref={register}>
                    {categories.map(({id,name},index)=>(
                        <option value={id}>{name}</option>
                    ))}                                         
            </select>
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputEmail1">Trạng thái sản phẩm</label>
            <div className="form-group form-check ml-4">
                <input type="radio" name="status" ref={register} value="Còn hàng" width="50px" />
                <label className="form-check-label" htmlFor="exampleCheck1">
                            Còn hàng
                </label>
            </div>
            <div className="form-group form-check ml-4">
              <input type="radio" name="status" ref={register} value="Hết hàng" />
              <label className="form-check-label" htmlFor="exampleCheck1">
                            Hết hàng
                </label>
            </div>
            </div>
        <button type="submit" className="btn btn-success">Thêm sản phẩm</button>
      </form>
    </div>
    </div>
    )
}

AddProducts.propTypes = {

}

export default AddProducts
