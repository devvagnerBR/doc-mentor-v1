import React from 'react'
import moment from 'moment';
import 'moment/dist/locale/pt-br';
import { Link,useNavigate } from 'react-router-dom'
import { TrashSimple } from '@phosphor-icons/react'
import { Plus } from '@phosphor-icons/react'
import useGetStudents from '../../../hooks/useGetStudents';
import useStudent from '../../../hooks/useStudent';
import { StudentContext } from '../../../context/studentsContext';



const MyStudents = () => {



    const navigate = useNavigate()
    const { students } = useGetStudents()
    const { maskStudentAsInactive } = useStudent()



    const handleMarkStudentAsInactive = async ( student ) => {
        await maskStudentAsInactive( student.id )
    }


    const handleStudentDetails = ( student ) => {
        navigate( student.id )
    }


    return (
        <div className={`w-full h-full flex flex-col`}>

            <header className='w-full flex h-14 justify-start  items-center p-3 gap-3 shrink-0'>
                <h1 className='text-2xl font-Saira font-medium'>Meus Alunos</h1>
                <Link to='novo-aluno' className='p-1 flex items-center gap-2 justify-center cursor-pointer text-neutral-700 text-sm px-2 rounded-sm bg-amber-400'>
                    <Plus />
                    Novo aluno
                </Link>
            </header>

            <main className='w-full h-full flex justify-start items-start gap-7 px-4'>
                {students.length === 0 ? 'nenhum aluno cadastrado' :
                    <>

                        <div>
                            <p className='text-neutral-300 font-light '>Num</p>
                            {students && students.map( ( student,index ) => {
                                return <p className={`${student.status === 'inativo' && 'text-neutral-400'}  text-sm`} key={student.id} >{index + 1}</p>
                            } )}
                        </div>
                        <div className=''>
                            <p className='text-neutral-300 font-light '>Nome</p>
                            {students && students.map( ( student ) => {
                                return <p
                                    key={student.id}
                                    className={`${student.status === 'inativo' && 'text-neutral-400'} underline cursor-pointer flex text-sm`}
                                    onClick={() => handleStudentDetails( student )}
                                >
                                    {student.student_name}
                                </p>
                            } )}
                        </div>

                        <div className=''>
                            <p className='text-neutral-300 font-light '>Idade</p>

                            {students && students.map( ( student,index ) => {
                                return <p className={`${student.status === 'inativo' && 'text-neutral-400'}  text-sm`} key={student.id} >{student.age} anos</p>
                            } )}
                        </div>



                        <div className=''>
                            <p className='text-neutral-300 font-light '>Escola</p>
                            {students && students.map( ( student,index ) => {
                                return <p className={`${student.status === 'inativo' && 'text-neutral-400'}  text-sm`} key={student.id}>{student.school_name}</p>
                            } )}
                        </div>

                        <div className=''>
                            <p className='text-neutral-300 font-light '>Deficiência</p>
                            {students.map( ( student,index ) => {
                                return <p className={`${student.status === 'inativo' && 'text-neutral-400'}  text-sm`} key={student.id}>{student.deficit}</p>
                            } )}
                        </div>
                        <div className=''>
                            <p className='text-neutral-300 font-light '>Dias de atendimento</p>
                            {students.map( ( student,index ) => {
                                return <p className={`${student.status === 'inativo' && 'text-neutral-400'}  text-sm`} key={student.id}>{student.service_days}</p>
                            } )}
                        </div>
                        <div className=''>
                            <p className='text-neutral-300 font-light '>Último relatório</p>
                            {students.map( ( student,index ) => {
                                return <p className={`${student.status === 'inativo' && 'text-neutral-400'}  text-sm`} key={student.id}>{student.last_report ? moment( student?.last_report ).fromNow() : 'nenhum'}</p>
                            } )}
                        </div>
                        <div className='flex flex-col items-start justify-center   '>
                            <p className='text-neutral-300 font-light  flex '>status</p>
                            {students.map( ( student,index ) => {
                                return <div key={student.id} className='flex gap-2 items-center'>
                                    <p className={` text-sm ${student.status === 'ativo' ? 'text-green-600' : 'text-red-400'}`} >{student.status}</p>
                                    {student.status !== 'inativo' && <TrashSimple title='Desativar aluno' onClick={() => handleMarkStudentAsInactive( student )} className='cursor-pointer flex text-neutral-500 ' />}
                                </div>
                            } )}

                        </div>

                    </>}
            </main>

        </div >
    )
}

export default MyStudents