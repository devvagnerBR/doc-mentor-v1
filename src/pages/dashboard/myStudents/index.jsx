import React from 'react'
import { Link,Route,Router,Routes } from 'react-router-dom'
import StudentDetails from './studentDetails'
import transformInSlug from './../../../util/transformInSlug';
import { Plus } from '@phosphor-icons/react'
import useTeacher from '../../../hooks/useTeacher';
import { AuthContext } from './../../../context/authContext';
import useGetStudents from '../../../hooks/useGetStudents';

const MyStudents = () => {

    // const students = [
    //     { id: 1,nome: 'Wagner Luiz',idade: 28,escola: 'CNEC',deficiencia: 'TDAH',dias_de_atendimento: 'quinta',ultimo_relatorio: '09/05/2023',status: 'ativo' },
    //     { id: 2,nome: 'Cassiane Costa',idade: 23,escola: 'UFRJ',deficiencia: 'Anssiedade',dias_de_atendimento: 'segunda e sexta',ultimo_relatorio: '03/05/2023',status: 'ativo' },
    //     { id: 3,nome: 'Paulo Lopes',idade: 21,escola: 'Maria Teixeira de Paula',deficiencia: 'Todas',dias_de_atendimento: 'quarta',ultimo_relatorio: '14/05/2023',status: 'ativo' },
    // ]



    // const getStudents = useTeacher()
    // const result = getStudents.getStudents( `teachers/${teacher?.id}/students` )

    const { students } = useGetStudents()

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
                        <p className='text-neutral-300 font-light '>Nascimento</p>

                        {students && students.map( ( student,index ) => {
                            return <p key={student.id} >{student.birth_day}</p>
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
                            return <p key={student.id}>{Date.now()}</p>
                        } )}
                    </div>
                    <div className=''>
                        <p className='text-neutral-300 font-light '>status</p>
                        {students.map( ( student,index ) => {
                            return <p key={student.id}>{student.status}</p>
                        } )}
                    </div>


                </main>

            </div>
        )
}

export default MyStudents