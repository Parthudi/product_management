import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Signup from './Pages/Signup';
import Signin from "./Pages/Signin";
import HomePage from './Pages/Home';
import Product from "./Pages/Product";
import Category from "./Pages/Category";

const AllRoutes = () => {
            return(
                <BrowserRouter>
                <Switch>
                    <Route path='/signup' exact component={Signup} />
                    <Route path='/signin' exact component={Signin} />
                    <Route path='/product' exact component={Product} />
                    <Route path='/category' exact component={Category} />
    
                    <Route path="/" component={HomePage} />
                </Switch>
            </BrowserRouter>
            )
    }

export default AllRoutes