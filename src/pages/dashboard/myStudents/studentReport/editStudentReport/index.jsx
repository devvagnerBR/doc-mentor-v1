import React from 'react'
import useGetReport from '../../../../../hooks/useGetReport'
import Input from '../../../../../components/input'
import useStudent from '../../../../../hooks/useStudent'
import { useParams } from 'react-router-dom'


const EditStudentReport = () => {

    const { report } = useGetReport()
    const [editedReport,setEditedReport] = React.useState( '' )
    const { updateReport } = useStudent()
    const { studentId,reportId } = useParams()


    React.useEffect( () => {

        const copyReport = report;
        setEditedReport( copyReport )


    },[report] )

    const handleUpdateReport = async ( event ) => {
        event.preventDefault()
        await updateReport( studentId,reportId,{ title: editedReport.title,content: editedReport.content } )
    }

    return (

        <div>
            <header className='w-full flex h-14 justify-start items-start p-3 shrink-0 flex-col '>
                <h1 className='text-2xl font-Saira font-medium'>Editar relatório</h1>
            </header>
            <form onSubmit={handleUpdateReport} className='p-3 '>

                <Input
                    label='Titulo do relatório:'
                    width='w-[25rem]'
                    value={editedReport?.title}
                    name='title'
                    onChange={( e ) => setEditedReport( { ...editedReport,title: e.target.value } )}
                />

                <label className='flex flex-col mt-2 justify-between'>
                    Relatório:
                    <textarea
                        className='border h-[50vh] outline-none text-sm p-1'
                        value={editedReport?.content}
                        name='content'
                        onChange={( e ) => setEditedReport( { ...editedReport,content: e.target.value } )}
                    />
                </label>
                <div className='flex justify-between items-center pt-2'>
                    <button type='submit' className='p-2 bg-amber-400 font-Saira text-neutral-700 hover:bg-amber-400/80 transition-all'>SALVAR RELATÓRIO</button>
                    <p className='text-end text-sm text-neutral-400 font-light font-Saira'>Caracteres: {editedReport?.content?.length}</p>
                </div>
            </form>
        </div>


    )



}

export default EditStudentReport