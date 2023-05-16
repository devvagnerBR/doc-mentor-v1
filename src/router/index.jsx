import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Homepage from './../pages/homepage/index';
import Dashboard from './../pages/dashboard/index';





const RouterConfig = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/dashboard/*' element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )


}

export default RouterConfig