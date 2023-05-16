import React from 'react'
import { Link,Route,Router,Routes } from 'react-router-dom'
import StudentDetails from './studentDetails'
import transformInSlug from './../../../util/transformInSlug';

const MyStudents = () => {

    const students = [
        { id: 1,nome: 'Wagner Luiz',idade: 28,escola: 'CNEC',deficiencia: 'TDAH',dias_de_atendimento: 'quinta',ultimo_relatorio: '09/05/2023',status: 'ativo' },
        { id: 2,nome: 'Cassiane Costa',idade: 23,escola: 'UFRJ',deficiencia: 'Anssiedade',dias_de_atendimento: 'segunda e sexta',ultimo_relatorio: '03/05/2023',status: 'ativo' },
        { id: 3,nome: 'Paulo Lopes',idade: 21,escola: 'Maria Teixeira de Paula',deficiencia: 'Todas',dias_de_atendimento: 'quarta',ultimo_relatorio: '14/05/2023',status: 'ativo' },
    ]

    return (
        <div className='w-full h-full flex flex-col'>

            <header className='w-full flex h-14 justify-start items-end p-3 shrink-0'>
                <h1 className='text-2xl font-Saira font-medium'>Meus Alunos</h1>
            </header>

            <main className='w-full h-full flex justify-start items-start gap-8 px-4'>
                <div>
                    <p className='text-neutral-300 font-light '>Num</p>
                    {students.map( ( student,index ) => {
                        return <p key={student.id}>{index + 1}</p>
                    } )}
                </div>
                <div className=''>
                    <p className='text-neutral-300 font-light '>Nome</p>
                    {students.map( ( student,index ) => {
                        return <Link to={transformInSlug( student.nome )} className='underline cursor-pointer flex' key={student.id}>{student.nome}</Link>
                    } )}
                </div>
                <div className=''>
                    <p className='text-neutral-300 font-light '>Idade</p>
                    {students.map( ( student,index ) => {
                        return <p key={student.id}>{student.idade}</p>
                    } )}
                </div>
                <div className=''>
                    <p className='text-neutral-300 font-light '>Escola</p>
                    {students.map( ( student,index ) => {
                        return <p key={student.id}>{student.escola}</p>
                    } )}
                </div>
                <div className=''>
                    <p className='text-neutral-300 font-light '>Deficiência</p>
                    {students.map( ( student,index ) => {
                        return <p key={student.id}>{student.deficiencia}</p>
                    } )}
                </div>
                <div className=''>
                    <p className='text-neutral-300 font-light '>Dias de atendimento</p>
                    {students.map( ( student,index ) => {
                        return <p key={student.id}>{student.dias_de_atendimento}</p>
                    } )}
                </div>
                <div className=''>
                    <p className='text-neutral-300 font-light '>Último relatório</p>
                    {students.map( ( student,index ) => {
                        return <p key={student.id}>{student.ultimo_relatorio}</p>
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