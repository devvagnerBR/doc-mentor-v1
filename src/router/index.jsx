import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Homepage from './../pages/homepage/index';
import Dashboard from './../pages/dashboard/index';
import AuthContextProvider from '../context/authContext';
import StudentContentProvider from '../context/studentsContext';
import useProtectedPage from '../hooks/useProtectedPage';






const RouterConfig = () => {





    return (
        <BrowserRouter>
            <AuthContextProvider>
                <StudentContentProvider>
                    <Routes>
                        <Route path='/' element={<Homepage />} />
                        <Route path='/dashboard/*' element={<Dashboard />} />
                    </Routes>
                </StudentContentProvider>
            </AuthContextProvider>
        </BrowserRouter>
    )


}

export default RouterConfig