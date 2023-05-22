import React from 'react'
import { Trash,FilePlus } from '@phosphor-icons/react'
import { Link,NavLink,Route,Routes,useParams } from 'react-router-dom'
import moment from 'moment';
import 'moment/dist/locale/pt-br';
import useStudent from '../../../../hooks/useStudent'
import useGetReports from '../../../../hooks/useGetReports'
import useGetStudentById from '../../../../hooks/useGetStudentById'
import { formatPhoneNumber } from '../../../../util/formatPhoneNumber';
import Reports from './reports';
import Documents from './documents';

const StudentDetails = () => {


    const { studentId } = useParams()
    const { deleteReport } = useStudent()
    const { reports } = useGetReports()

    const { student } = useGetStudentById( studentId )


    const handleDeleteReport = async ( report ) => {

        if ( window.confirm( 'Deseja mesmo excluir esse relatório?' ) ) {
            await deleteReport( report.id,studentId )
        }
    }


    return (
        <div className='w-full h-full flex flex-col'>

            <header className='w-full flex h-25 justify-start items-start p-3 shrink-0 flex-col'>
                <div className='flex items-end justify-center gap-2'>
                    <h1 className='text-2xl font-Saira font-medium'>{student?.name}</h1>
                    <div>
                        <Link to={`editar-aluno`} className=' font-Saira underline  text-amber-400 cursor-pointer'>editar aluno</Link>
                    </div>
                </div>

                <div className='flex gap-3'>
                    <h2 className='text-neutral-500'>Escola: <span className='text-neutral-700'>{student?.school_name}</span></h2>
                    <h2 className='text-neutral-500'>Turma: <span className='text-neutral-700'>{student?.class_name}</span></h2>
                    <h2 className='text-neutral-500'>Turno: <span className='text-neutral-700'>{student?.shift}</span></h2>
                </div>
                <div className='flex gap-3'>
                    <h2 className='text-neutral-500'>Idade: <span className='text-neutral-700'>{student?.age} anos</span></h2>
                    <h2 className='text-neutral-500'>Data de nascimento: <span className='text-neutral-700'>{moment( student?.birth_day ).format( 'L' )}</span></h2>
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-neutral-500'>Telefone do responsável: <span className='text-neutral-700'>{student?.parent_phone && formatPhoneNumber( student?.parent_phone )}</span></h2>
                    <h2 className='text-neutral-500'>Dias de atendimento: <span className='text-neutral-700'>{student?.service_days}</span></h2>
                    <h2 className='text-neutral-500'>Necessidade especial: <span className='text-neutral-700'>{student?.deficit}</span></h2>
                </div>
            </header>

            <section className='w-full h-full flex flex-col '>
                <header className='w-full flex  h-25 justify-start gap-4 items-end p-3 shrink-0 '>
                    <div className=' flex gap-3'>
                        <h1 className='font-medium font-Saira text-xl'>Relatórios</h1>
                    </div>
                    {student?.status !== 'inativo' ? <Link to={'novo-relatorio'} className='flex items-center gap-1 font-Saira text-amber-400 underline'>
                        <FilePlus size={20} />
                        Novo relatório
                    </Link> : null}
                </header>

                <main className='flex flex-col'>
                    <Reports reports={reports} />
                    <Documents />
                </main>



            </section>

        </div >
    )
}

export default StudentDetails