import { Trash } from '@phosphor-icons/react'
import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment';
import 'moment/dist/locale/pt-br';
import useStudent from '../../../../../hooks/useStudent';

const Reports = ( { reports } ) => {

    const { deleteReport } = useStudent()

    const handleDeleteReport = async ( report ) => {
        if ( window.confirm( 'Deseja mesmo excluir esse relatório?' ) ) {
            await deleteReport( report.id,studentId )
        }
    }

    
    return (
        <main className='w-full h-full flex justify-start items-start gap-8 px-4'>
            {reports.length === 0 ? 'Ainda não foi registrado nenhum relatório' :
                <>
                    <div>
                        <p className='text-neutral-300 font-light '>Num</p>
                        {reports?.map( ( relatorio,index ) => {
                            return <p key={relatorio?.id}>{index + 1} </p>
                        } )}
                    </div>
                    <div>
                        <p className='text-neutral-300 font-light '>Título</p>
                        {reports?.map( ( relatorio ) => {
                            return <Link to={relatorio.id} className='underline cursor-pointer flex' key={relatorio.id}>{relatorio?.title} </Link>
                        } )}
                    </div>
                    <div>
                        <p className='text-neutral-300 font-light '>Data</p>
                        {reports?.map( ( relatorio ) => {
                            return <div key={relatorio?.id} className='flex items-center gap-2'>
                                <p >{moment( relatorio?.report_date ).format( 'DD-MM-YYYY' )} </p>
                                <Trash onClick={() => handleDeleteReport( relatorio )} className='cursor-pointer' />
                            </div>
                        } )}
                    </div>
                </>}

        </main>
    )
}

export default Reports