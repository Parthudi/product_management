import {API} from "../config";

export const RegisterUser = (data) => {
    try{
        return fetch(`${API}/users/register`, {
            method: "POST",
            headers: {
                    "Content-Type": "application/json",
                },   
            body: JSON.stringify(data)
        }).then(response => response.json())
    }catch(error) {               
        console.log(error)
        return {message: error};
    }  
}

export const LoginUser = (data) => {
    try{
        return fetch(`${API}/users/login`, {
            method: "POST",
            headers: {
                    "Content-Type": "application/json",
                },   
            body: JSON.stringify(data)
        }).then(response => response.json());
    }catch(error) {               
        console.log(error);
        return {message: error};
    }  
}

export const getAllCategory = () => {
    try{
        return fetch(`${API}/category`, {
            method: "Get",
            headers: {
                    "Content-Type": "application/json",
                }
        }).then(response => response.json());
    }catch(error) {               
        console.log(error);
        return {message: error};
    }     
}

export const getAllProducts = () => {
    try{
        return fetch(`${API}/product`, {
            method: "Get",
            headers: {
                    "Content-Type": "application/json",
                }
        }).then(response => response.json());
    }catch(error) {               
        console.log(error);
        return {message: error};
    }  
}

export const CreateProductCall = (formData, userId) => {
    try{
        return fetch(`${API}/product/${userId}`, {
            method: "POST",  
            body: formData
        }).then(response => response.json());
    }catch(error) {               
        console.log(error);
        return {message: error};
    }  
}

export const GetProductsRelatedToCategory = (categoryId) => {
    try{
        return fetch(`${API}/product/related/${categoryId}`, {
            method: "GET",  
            headers: {
                "Content-Type": "application/json",
            }
        }).then(response => response.json());
    }catch(error) {               
        console.log(error);
        return {message: error};
    }  
}

export const CreateCategory = (name) => {
    try{
        return fetch(`${API}/category`, {
            method: "POST",  
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name})
        }).then(response => response.json());
    }catch(error) {               
        console.log(error);
        return {message: error};
    }  
}

export const ProductSearch = (query) => {
    try{
        return fetch(`${API}/product/by/search?search=${query}`, {
            method: "GET",  
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => response.json());
    }catch(error) {               
        console.log(error);
        return {message: error};
    }  
}

export const RemoveCategory = (userId, categoryId) => {
    try{
        return fetch(`${API}/category/${userId}/${categoryId}`, {
            method: "DELETE",  
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => response.json());
    }catch(error) {               
        console.log(error);
        return {message: error};
    }  
}

export const RemoveProduct = (userId, productId) => {
    try{
        return fetch(`${API}/product/${productId}/${userId}`, {
            method: "DELETE",  
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => response.json());
    }catch(error) {               
        console.log(error);
        return {message: error};
    }  
}

export const GetProductByProductId = (productId) => {
    try{
        return fetch(`${API}/product/${productId}`, {
            method: "GET",  
            headers: {
                "Content-Type": "application/json",
            },
        }).then(response => response.json());
    }catch(error) {               
        console.log(error);
        return {message: error};
    }  
}

export const UpdateProduct = (userId, productId, formData) => {
    try{
        return fetch(`${API}/product/${productId}/${userId}`, {
            method: "PATCH",  
            body: formData
        }).then(response => response.json());
    }catch(error) {               
        console.log(error);
        return {message: error};
    }  
}

