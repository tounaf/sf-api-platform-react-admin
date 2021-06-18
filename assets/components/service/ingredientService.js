import http from "../http-common";

const getAll = () => {
    return http.get("/ingredients");
};

const get = id => {
    return http.get(`/ingredients/${id}`);
};

const create = data => {
    return http.post("/ingredients", data);
};

const update = (id, data) => {
    return http.put(`/ingredients/${id}`, data);
};

const remove = id => {
    return http.delete(`/ingredients/${id}`);
};

const removeAll = () => {
    return http.delete(`/ingredients`);
};

const findByTitle = title => {
    return http.get(`/ingredients?libelle=${libelle}`);
};

export default {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle
};