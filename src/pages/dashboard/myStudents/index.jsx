import React from 'react'
import { Link,Route,Router,Routes } from 'react-router-dom'
import StudentDetails from './studentDetails'
import transformInSlug from './../../../util/transformInSlug';
import { Plus } from '@phosphor-icons/react'
import useTeacher from '../../../hooks/useTeacher';
import { AuthContext } from './../../../context/authContext';
import useGetStudents from '../../../hooks/useGetStudents';
import moment from 'moment';
import useStudent from '../../../hooks/useStudent';

const MyStudents = () => {

    moment.locale( 'pt-br' );
    const { students } = useGetStudents()
    const { maskStudentAsInactive } = useStudent()


    const handleMarkStudentAsInactive = async ( student ) => {
        await maskStudentAsInactive( student.id )
    }


    if ( students )
        return (
            <div className='w-full h-full flex flex-col'>

                <header className='w-full flex h-14 justify-start  items-center p-3 gap-3 shrink-0'>
                    <h1 className='text-2xl font-Saira font-medium'>Meus Alunos</h1>
                    <Link to='novo-aluno' className='p-1 flex items-center gap-2 justify-center cursor-pointer text-neutral-700 text-sm px-2 rounded-sm bg-amber-400'>
                        <Plus />
                        Novo aluno
                    </Link>
                </header>

                <main className='w-full h-full flex justify-start items-start gap-8 px-4'>
                    <div>
                        <p className='text-neutral-300 font-light '>Num</p>
                        {students && students.map( ( student,index ) => {
                            return <p key={student.id} >{index + 1}</p>
                        } )}
                    </div>
                    <div className=''>
                        <p className='text-neutral-300 font-light '>Nome</p>
                        {students && students.map( ( student ) => {
                            return <Link
                                key={student.id}
                                className='underline cursor-pointer flex'
                                to={transformInSlug( student.student_name )}>
                                {student.student_name}
                            </Link>
                        } )}
                    </div>

                    <div className=''>
                        <p className='text-neutral-300 font-light '>Idade</p>

                        {students && students.map( ( student,index ) => {
                            return <p key={student.id} >{student.age}</p>
                        } )}
                    </div>



                    <div className=''>
                        <p className='text-neutral-300 font-light '>Escola</p>
                        {students && students.map( ( student,index ) => {
                            return <p key={student.id}>{student.school_name}</p>
                        } )}
                    </div>

                    <div className=''>
                        <p className='text-neutral-300 font-light '>Deficiência</p>
                        {students.map( ( student,index ) => {
                            return <p key={student.id}>{student.deficit}</p>
                        } )}
                    </div>
                    <div className=''>
                        <p className='text-neutral-300 font-light '>Dias de atendimento</p>
                        {students.map( ( student,index ) => {
                            return <p key={student.id}>{student.service_days}</p>
                        } )}
                    </div>
                    <div className=''>
                        <p className='text-neutral-300 font-light '>Último relatório</p>
                        {students.map( ( student,index ) => {
                            return <p key={student.id}>{student.last_report ? moment( student.last_report ).startOf( 'days' ).fromNow() : 'nenhum'}</p>
                        } )}
                    </div>
                    <div className='flex flex-col items-center justify-center  gap-2 '>
                        <p className='text-neutral-300 font-light  flex gap-2'>status</p>
                        {students.map( ( student,index ) => {
                            return <div className='flex gap-2'>
                                <p className={`${student.status === 'ativo' && 'text-green-600'}`} key={student.id}>{student.status}</p>
                                <button onClick={() => handleMarkStudentAsInactive( student )} className='bg-red-500 w-6 cursor-pointer flex '>X</button>
                            </div>
                        } )}

                    </div>


                </main>

            </div>
        )
}

export default MyStudents