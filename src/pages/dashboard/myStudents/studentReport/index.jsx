import React from 'react'
import moment from 'moment';
import 'moment/dist/locale/pt-br';
import { Link,useParams } from 'react-router-dom';
import useGetStudentById from '../../../../hooks/useGetStudentById';
import useGetReport from '../../../../hooks/useGetReport';
import useGeneratePDF from '../../../../hooks/useGeneratePDF';


const StudentReport = () => {

    const { studentId } = useParams()
    const { student } = useGetStudentById( studentId )
    const { report } = useGetReport()


    const handleGeneratePDF = async () => {
        await useGeneratePDF( student.name,student.school_name,report.title,report.content,report.report_date )
    }

    if ( report )
        return (
            <div className='w-full h-full flex flex-col'>

                <header className='w-full flex h-20 justify-start items-start p-3 shrink-0 flex-col '>
                    <div className='flex gap-3 items-end justify-center'>
                        <h1 className='text-2xl font-Saira font-medium'>{student?.name}</h1>
                        <Link to={`editar-relatorio`} className=' font-Saira underline  text-amber-400 cursor-pointer'>editar relatório</Link>
                        <button onClick={handleGeneratePDF} className=' font-Saira underline  text-amber-400 cursor-pointer'>gerar PDF</button>
                    </div>
                    <h1
                        className='text-neutral-400'>
                        Título do relatório:
                        <span
                            className='text-neutral-600 font-medium'>
                            {report?.title}
                        </span>
                    </h1>
                    <h1
                        className='text-neutral-400'>
                        data do relatório:
                        <span className='text-neutral-600 font-medium'>
                            {moment( report?.report_date ).format( 'DD-MM-YYYY' )}
                        </span>
                    </h1>
                </header>


                <div className='flex mt-4 p-3  flex-wrap flex-col'>
                    <h1>Relatório:</h1>
                    <p className='break-all text-neutral-600  text-sm'>{report?.content}</p>
                </div>
            </div>
        )
}

export default StudentReport