import React from 'react'
import useGetStudents from '../../../../hooks/useGetStudents'
import { StudentContext } from '../../../../context/studentsContext'
import moment from 'moment';
import 'moment/dist/locale/pt-br';
import { useParams } from 'react-router-dom';
import useGetStudentById from '../../../../hooks/useGetStudentById';
import useGetReport from '../../../../hooks/useGetReport';


const StudentReport = () => {

    const { studentId } = useParams()
    const { student } = useGetStudentById( studentId )
    const { report } = useGetReport()
 
    if ( report )
        return (
            <div className='w-full h-full flex flex-col'>

                <header className='w-full flex h-20 justify-start items-start p-3 shrink-0 flex-col '>
                    <h1 className='text-2xl font-Saira font-medium'>{student?.student_name}</h1>
                    <h1 className='text-neutral-400'>Título do relatório: <span className='text-neutral-600 font-medium'>{report?.title} </span> </h1>
                    <h1 className='text-neutral-400'>data do relatório: <span className='text-neutral-600 font-medium'>{moment( report?.report_date ).format( 'DD-MM-YYYY' )} </span> </h1>
                </header>


                <div className='flex mt-4 p-3  flex-wrap flex-col'>
                    <h1>Relatório:</h1>
                    <p className='break-all text-neutral-600  text-sm'>{report?.content}</p>
                </div>
            </div>
        )
}

export default StudentReport