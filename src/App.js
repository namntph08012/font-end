import React, { useState, useEffect } from 'react';
import Routers from './routers';
import apiRequest from './api/productApi'
import apiRequestCate from'./api/categoriesApi';
import apiRequestBlog from'./api/blogApi';



function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [blogs, setBlogs] = useState([]); 
  // Phần sản phẩm
  // Danh sách sản phẩm
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiRequest.getAll();
        setProducts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getProducts();
    const getCategories = async () => {
      try {
        const { data } = await apiRequestCate.getAll();
        setCategories(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getCategories();
    const getBlogs = async () => {
      try {
        const { data } = await apiRequestBlog.getAll();
        setBlogs(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getBlogs();
  }, []);
  // Xóa sản phẩm
  const onHandleRemove = async (id) => {
    try {
      const { data } = await apiRequest.remove(id);
      const newProducts = products.filter(product => product.id !== id);
      setProducts(newProducts);
      alert("Xóa thành công")
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }
  // Thêm sản phẩm
  const onHandleAdd = async (product) => {
    try {
      const { data } = await apiRequest.create(product);
      setProducts([
        ...products,
        data
      ])
      alert("Đã thêm thành công !");
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }
  
  // Cập nhật product 
  const onHandleUpdate = async (updateProduct) => {
    try{
      const{data} = await apiRequest.update(updateProduct.id, updateProduct);
      const newProducts = products.map(product => (
        product.id === updateProduct.id ? updateProduct : product  // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
      ));
      setProducts(newProducts);
      alert("Đã sửa thành công !");
    }
    catch (error){
      console.log('failed to request API: ', error)
    }
  }
  // Phần danh mục
  const onHandleRemoveCate = async (id) => {
    try {
      const { data } = await apiRequestCate.remove(id);
      const newCategories = categories.filter(category => category.id !== id);
      setCategories(newCategories);
      alert("Xóa thành công")
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  const onHandleAddCate = async (category) => {
    try {
      const { data } = await apiRequestCate.create(category);
      setCategories([
        ...categories,
        data
      ])
      alert("Đã thêm thành công !");
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  const onHandleUpdateCate = async (updateCategory) => {
    console.log(updateCategory)
    try{
      const{data} = await apiRequestCate.update(updateCategory.id, updateCategory);
      const newCategories = categories.map(category => (
        category.id === updateCategory.id ? updateCategory : category 
      ));
      setCategories(newCategories);
      alert("Đã sửa thành công !");
    }
    catch (error){
      console.log('failed to request API: ', error)
    }
  }
  // Phần bài viết
  const onHandleRemoveBlog = async (id) => {
    try {
      const { data } = await apiRequestBlog.remove(id);
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs);
      alert("Xóa thành công")
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  const onHandleAddBlog = async (blog) => {
    try {
      const { data } = await apiRequestBlog.create(blog);
      setBlogs([
        ...blogs,
        data
      ])
      alert("Đã thêm thành công !");
    } catch (error) {
      console.log('failed to request API: ', error)
    }
  }

  const onHandleUpdateBlog = async (updateBlog) => {
    try{
      const{data} = await apiRequestBlog.update(updateBlog.id, updateBlog);
      const newBlogs = blogs.map(blog => (
        blog.id === updateBlog.id ? updateBlog : blog 
      ));
      setBlogs(newBlogs);
      alert("Đã sửa thành công !");
    }
    catch (error){
      console.log('failed to request API: ', error)
    }
  }
  //   const newProducts = products.map(product => (
  //     product.id === updateProduct.id ? updateProduct : product  // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
  //   ));
  //   localStorage.setItem('products', JSON.stringify(newProducts))
  //   setProducts(newProducts);
  return (
    <div className="App">
      <Routers
       blogs ={blogs}
       onRemoveBlog = {onHandleRemoveBlog}
       onAddBlog ={onHandleAddBlog}
       onUpdateBlog={onHandleUpdateBlog}
       categories ={categories} 
       onRemoveCate = {onHandleRemoveCate}
       onAddCate = {onHandleAddCate}
       onUpdateCate={onHandleUpdateCate}
       products={products} 
       onRemove={onHandleRemove}  
       onAdd ={onHandleAdd} 
       onUpdate ={onHandleUpdate} />
    </div>
  )

}
export default App;