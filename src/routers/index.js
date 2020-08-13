import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'
import Categories from '../pages/views/Admin/Categories'
import AddProducts from '../pages/views/Admin/AddProducts'
import EditProducts from '../pages/views/Admin/EditProducts'
import DetailProducts from '../pages/views/Main/DetailProducts'
import AddCategories from '../pages/views/Admin/AddCategories'
import EditCategories from '../pages/views/Admin/EditCategories'
import Blogs from '../pages/views/Admin/Blogs'
import EditBlogs from '../pages/views/Admin/EditBlogs'
import AddBlogs from '../pages/views/Admin/AddBlogs'




//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import Blog from '../pages/views/Main/Blog'
import DetailBlogs from '../pages/views/Main/DetailBlogs'
import ShowProducts from '../pages/views/Main/ShowProducts'








const Routers = ({blogs,products, 
    onAddBlog, 
    onUpdateBlog ,onRemove,onRemoveCate, onAdd ,
    onAddCate, onUpdate,onUpdateCate, categories,onRemoveBlog}) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    const onHandleRemoveCate = (id) => {
        onRemoveCate(id)
    }
    const onHandleAdd =(products) =>{
        onAdd(products)
    }
    const onHandleAddCate =(categories) =>{
        onAddCate(categories)
    }
    const onHandleUpdate = (id,products) =>{
        onUpdate(id,products);
    }
    const onHandleUpdateCate = (id,categories) =>{
        onUpdateCate(id,categories);
    }
    const onHandleAddBlog =(blogs) =>{
        onAddBlog(blogs)
    }
    const onHandleRemoveBlog = (id) => {
        onRemoveBlog(id)
    }
    const onHandleUpdateBlog = (id,blogs) =>{
        onUpdateBlog(id,blogs);
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin" >
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard  products={products} categories ={categories} blogs={blogs}/>
                            </Route>
                            <Route path='/admin/products' exact >
                                <ProductsManager  products={products} onRemove={onHandleRemove} categories ={categories} />
                            </Route>
                            <Route path='/admin/products/add'>
                                <AddProducts  onAdd={onHandleAdd} categories ={categories}/>
                            </Route>
                            <Route path='/admin/products/edit/:id'>
                                <EditProducts  products={products} onUpdate ={onHandleUpdate} categories ={categories}/>
                            </Route>
                            <Route path='/admin/categories' exact >
                                <Categories  categories ={categories} onRemoveCate={onHandleRemoveCate}  products={products} />
                            </Route>
                            <Route path='/admin/categories/add' >
                                <AddCategories   onAddCate={onHandleAddCate}   />
                            </Route>
                            <Route path='/admin/categories/edit/:id' >
                                <EditCategories   onUpdateCate={onHandleUpdateCate} categories ={categories}   />
                            </Route>
                            <Route path='/admin/blogs' exact >
                                <Blogs  blogs={blogs} onRemoveBlog = {onHandleRemoveBlog}  
                                onUpdateBlog={onHandleUpdateBlog} onAddBlog={onHandleAddBlog}/>
                            </Route>
                            <Route path='/admin/blogs/add' exact >
                                <AddBlogs  blogs={blogs}   
                                onAddBlog={onHandleAddBlog} />
                            </Route>
                            <Route path='/admin/blogs/edit/:id' exact >
                                <EditBlogs  blogs={blogs}   
                                onUpdateBlog={onHandleUpdateBlog} />
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route>
                <Route>
                    <LayoutMain categories={categories}>
                        <Switch>
                            <Route path="/" exact>
                                <Home  products={products} categories={categories}/>
                            </Route>
                            <Route path="/detailproducts/:id">
                                <DetailProducts products = {products} />
                            </Route>
                            <Route path="/about">
                                <About products={products} categories={categories}/>
                            </Route>
                            <Route path="/blogs">
                                <Blog products={products} blogs={blogs} categories={categories}/>
                            </Route>
                            <Route path="/detailblogs/:id">
                                <DetailBlogs products={products} blogs={blogs} categories={categories}/>
                            </Route>
                            <Route path="/showproducts/:id">
                                <ShowProducts products={products} blogs={blogs} categories={categories}/>
                            </Route>
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
