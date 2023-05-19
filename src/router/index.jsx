import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Homepage from './../pages/homepage/index';
import Dashboard from './../pages/dashboard/index';
import AuthContextProvider from '../context/authContext';







const RouterConfig = () => {





    return (
        <BrowserRouter>
            <AuthContextProvider>
                    <Routes>
                        <Route path='/' element={<Homepage />} />
                        <Route path='/dashboard/*' element={<Dashboard />} />
                    </Routes>
            </AuthContextProvider>
        </BrowserRouter>
    )


}

export default RouterConfig