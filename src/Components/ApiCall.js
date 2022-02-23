import {API} from "../config";

export const RegisterUser = (data) => {
    try{
        return fetch(`${API}/register`, {
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
        return fetch(`${API}/login`, {
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