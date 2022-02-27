import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Signup from './Pages/Signup';
import Signin from "./Pages/Signin";
import HomePage from './Pages/Home';
import Product from "./Pages/Product";
import Category from "./Pages/Category";
import UpdateProduct from "./Pages/UpdateProduct";
import AuthenticationRoute from "./HOC/Authentication";

const AllRoutes = () => {
            return(
                <BrowserRouter>
                <Switch>
                    <Route path='/signup' exact component={Signup} />
                    <Route path='/signin' exact component={Signin} />
                    <AuthenticationRoute path='/product' exact component={Product} />
                    <AuthenticationRoute path='/category' exact component={Category} />

                    <AuthenticationRoute path="/:pathname/update/:productId" exact component={UpdateProduct} />
                    <AuthenticationRoute path="/" component={HomePage} />
                </Switch>
            </BrowserRouter>
            )
    }

export default AllRoutes