import React from 'react'
import SideBar from '../../components/sidebar'
import Header from '../../components/header'
import { Route,Routes } from 'react-router-dom'
import MyHome from './myHome'
import MyStudents from './myStudents'
import MyData from './myData'
import MySchools from './mySchools'
import StudentDetails from './myStudents/studentDetails'
import StudentReport from './myStudents/studentReport';
import NewStudent from './myStudents/newStudent'
import NewReport from './myStudents/newReport/index';
import EditStudent from './myStudents/editStudent'
import useProtectedPage from '../../hooks/useProtectedPage'
import { AuthContext } from '../../context/authContext'
import EditStudentReport from './myStudents/studentReport/editStudentReport'
import NewDocument from './myStudents/studentDetails/documents/newDocument'



const Dashboard = () => {

    const teacher = React.useContext( AuthContext )
    return (

        <div className='bg-gray-50 w-100dvw h-100dvh flex'>
            <SideBar />

            <section className='flex flex-col w-full'>
                <Header />
                <Routes>

                    <Route path='/' element={<MyHome />} />
                    {useProtectedPage( teacher )}

                    <Route path='meus-alunos' element={<MyStudents />} />
                    <Route path='meus-dados' element={<MyData />} />
                    <Route path='minhas-escolas' element={<MySchools />} />
                    <Route path='meus-alunos/:studentId/*' element={<StudentDetails />} />
                    <Route path='meus-alunos/:studentId/novo-documento' element={<NewDocument />} />
                    <Route path='meus-alunos/:studentId/editar-aluno' element={<EditStudent />} />
                    <Route path='meus-alunos/:studentId/:reportId' element={<StudentReport />} />
                    <Route path='meus-alunos/:studentId/:reportId/editar-relatorio' element={<EditStudentReport />} />
                    <Route path='meus-alunos/:studentId/novo-relatorio' element={<NewReport />} />
                    <Route path='meus-alunos/novo-aluno' element={<NewStudent />} />

                </Routes>

            </section>

        </div>
    )
}

export default Dashboard