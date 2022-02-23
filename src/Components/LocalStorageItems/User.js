import _ from "lodash";

export const userRegistration = (data) => {
    if(typeof window !== 'undefined') {
        const user = localStorage.setItem('user', JSON.stringify(data));
        return user;
    }
}

export const getUser = () => {
    if(typeof window !== "undefined"){
        if(localStorage.getItem("user")) {
            const user = JSON.parse(localStorage.getItem('user'));
            return _.isEmpty(user) ? {} : user;
        }
    }
    return {};
}


export const removeUser = () => {
    if(typeof window !== 'undefined') {
        const user = localStorage.removeItem('user');
        window.location.reload();
        return user;
    }
}
