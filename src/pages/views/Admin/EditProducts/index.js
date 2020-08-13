import React , {useState} from 'react'
import PropTypes from 'prop-types'
import {useParams} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useHistory } from "react-router-dom"
import firebase from '../../../../firebase/index'


 

const EditProducts = ({ products, onUpdate , categories ,}) => {
  let { id } = useParams();
  let history = useHistory();
  let { image } = useParams();
  const product = products.find(product => product.id === id);
  const { register, handleSubmit, errors } = useForm(); // Sử dụng hook form
  const [currentProduct, setCurrentProduct] = useState(product);
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
              onUpdate(newData);
              history.push('/admin/products');
        })
      })
    }
    else{
                const newData = {
                id: id,
                ...data,
                image: product.image,
              }
              onUpdate(newData);
              history.push('/admin/products');
    }   
  }
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct({
        ...currentProduct,
        [name]: value
    })
}
    return (
        <div className="content-wrapper">
        <div className="card-header py-3">
             <h1 className="h3 mb-2 text-gray-800">Edit Products</h1>
            <form action='' onSubmit ={handleSubmit(onHandleSubmit)}>
            <div className="form-group">
            <label htmlFor="exampleInputEmail1">Tên Sản Phẩm</label>
            <input   
                    defaultValue={currentProduct.name}
                    onChange = {onHandleChange}
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
             {errors.name && errors.name.type === "minLength" && <p>Yêu cầu chọn ảnh</p>}
             {errors.name && errors.name.type === "pattern" && <p>Không nhập dấu cách</p>}
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputEmail1">Ảnh Sản Phẩm</label><br></br>
            <img src={currentProduct.image} width="150px" ></img><br></br><br></br>
            <input   
                    // defaultValue={currentProduct.image}
                    onChange = {onHandleChange}
                    type="file" 
                    className="form-control"  
                    placeholder="Ảnh Sản Phẩm" 
                    name="image"
                    ref={register({
                        minLength: 5,
                        pattern: /([^\s])/,
                      })}
            />
            {errors.image && errors.image.message}
            {errors.image && errors.image.type === "minLength" && <p>Nhập tối thiểu 5 ký tự</p>}
            {errors.name && errors.image.type === "pattern" && <p>Không nhập dấu cách</p>}
            
            </div>
            <div className="form-group">
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
            </div>
            <div className="form-group">
            <label htmlFor="exampleInputEmail1">Chi Tiết Sản Phẩm</label>
            <textarea  
                    defaultValue={currentProduct.detail}
                    onChange = {onHandleChange}
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
                    ref={register}
                    onChange = {onHandleChange}>
                    {categories.map(({id,name})=>(
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
        <button type="submit" className="btn btn-success">UpDate</button>
      </form>
    </div>
    </div>
    )
}

EditProducts.propTypes = {

}

export default EditProducts
