import http from "./axiosHttp";

const getAll = () => {
    return http.get("/blogs");
};

const get = id => {
    return http.get(`/blogs/${id}`);
};

const create = data => {
    return http.post("/blogs", data);
};

const update = (id, data) => {
    return http.put(`/blogs/${id}`, data);
};

const remove = id => {
    console.log(id);
    return http.delete(`/blogs/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};