import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Pages/Signup';
import Signin from "./Pages/Signin";

const AllRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/signup' element={<Signup/>} />
                <Route path='/signin' element={<Signin/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AllRoutes