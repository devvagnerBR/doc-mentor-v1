import React from 'react'
import { PencilSimpleLine,Trash,FilePlus } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import transformInSlug from '../../../../util/transformInSlug'
import { StudentContext } from '../../../../context/studentsContext'
import moment from 'moment';
import 'moment/dist/locale/pt-br';

const StudentDetails = () => {

    const { student } = React.useContext( StudentContext )
    const [studentDetails,setStudentDetails] = React.useState( student || JSON.parse( window.localStorage.getItem( 'student' ) ) )
    const reports = studentDetails.reports

    return (
        <div className='w-full h-full flex flex-col'>

            <header className='w-full flex h-25 justify-start items-start p-3 shrink-0 flex-col'>
                <div className='flex items-end justify-center gap-2'>
                    <h1 className='text-2xl font-Saira font-medium'>{studentDetails?.student_name}</h1>
                    <div>
                        <Link to={`editar-aluno`} className=' font-Saira underline  text-amber-400 cursor-pointer'>editar aluno</Link>
                    </div>
                </div>

                <div className='flex gap-3'>
                    <h2 className='text-neutral-500'>Escola: <span className='text-neutral-700'>{studentDetails?.school_name}</span></h2>
                    <h2 className='text-neutral-500'>Turma: <span className='text-neutral-700'>{studentDetails?.class_name}</span></h2>
                    <h2 className='text-neutral-500'>Turno: <span className='text-neutral-700'>{studentDetails?.shift}</span></h2>
                </div>
                <h2 className='text-neutral-500'>Idade: <span className='text-neutral-700'>{studentDetails?.age} anos</span></h2>
            </header>

            <section className='w-full h-full flex flex-col '>
                <header className='w-full flex  h-25 justify-between items-center p-3 shrink-0 '>
                    <h1 className='font-medium font-Saira text-xl'>Relatórios:</h1>
                    <Link to={'novo-relatorio'} className='flex items-center gap-1 font-Saira text-amber-400 underline'>
                        <FilePlus size={20} />
                        Novo relatório
                    </Link>
                </header>

                <main className='w-full h-full flex justify-start items-start gap-8 px-4'>
                    {!studentDetails.reports || studentDetails.reports.length === 0 ? 'Ainda não foi registrado nenhum relatório' :
                        <>
                            <div>
                                <p className='text-neutral-300 font-light '>Num</p>
                                {reports?.map( ( relatorio,index ) => {
                                    return <p key={relatorio?.id}>{index + 1} </p>
                                } )}
                            </div>
                            <div>
                                <p className='text-neutral-300 font-light '>Título</p>
                                {reports?.map( ( relatorio,index ) => {
                                    return <Link to={transformInSlug( relatorio.title )} className='underline cursor-pointer flex' key={relatorio.id}>{relatorio?.title} </Link>
                                } )}
                            </div>
                            <div>
                                <p className='text-neutral-300 font-light '>Data</p>
                                {reports?.map( ( relatorio,index ) => {
                                    return <div key={relatorio?.id} className='flex items-center gap-2'>
                                        <p >{moment( relatorio?.report_date ).format( 'DD-MM-YYYY' )} </p>
                                        <PencilSimpleLine className='cursor-pointer' />
                                        <Trash className='cursor-pointer' />
                                    </div>
                                } )}
                            </div>
                        </>}
                </main>
            </section>
        </div>
    )
}

export default StudentDetails