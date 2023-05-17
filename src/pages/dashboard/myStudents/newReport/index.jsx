import React from 'react'
import { StudentContext } from '../../../../context/studentsContext'
import Input from '../../../../components/input'
import useStudent from '../../../../hooks/useStudent'
import { v4 as idGenerator } from 'uuid'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

const formInitial = {
    title: '',
    content: '',
}

const NewReport = () => {


    const navigate = useNavigate()
    const { addNewReport } = useStudent()
    const { student } = React.useContext( StudentContext )
    const [studentDetails,setStudentDetails] = React.useState( student || JSON.parse( window.localStorage.getItem( 'student' ) ) )
    const [inputValues,setInputValues] = React.useState( formInitial );


    const handleChange = ( event ) => {
        const { name,value } = event.target;
        setInputValues( { ...inputValues,[name]: value } )
    };

    const handleNewReport = async ( event ) => {
        event.preventDefault()

        const body = {
            report_date: Date.now(),
            title: inputValues.title,
            content: inputValues.content,
        }


        await addNewReport( studentDetails.id,body )
        setInputValues( formInitial )
        navigate(`/dashboard/meus-alunos`)
    }


    return (

        <div className='w-full h-full flex flex-col'>
            <header className='w-full flex h-25 justify-start items-start p-3 shrink-0 flex-col'>
                <div className='flex items-end justify-center gap-2'>
                    <h1 className='text-2xl font-Saira font-medium'>{studentDetails?.student_name}</h1>
                    <div>
                        <h1 className=' font-Saira underline  text-amber-400 cursor-pointer'>editar aluno</h1>
                    </div>
                </div>

                <div className='flex gap-3'>
                    <h2 className='text-neutral-500'>Escola: <span className='text-neutral-700'>{studentDetails?.school_name}</span></h2>
                    <h2 className='text-neutral-500'>Turma: <span className='text-neutral-700'>{studentDetails?.class_name}</span></h2>
                    <h2 className='text-neutral-500'>Turno: <span className='text-neutral-700'>{studentDetails?.shift}</span></h2>
                </div>
                <h2 className='text-neutral-500'>Idade: <span className='text-neutral-700'>{studentDetails?.age} anos</span></h2>
            </header>

            <form onSubmit={handleNewReport} className='p-3 '>

                <Input
                    label='Titulo do relatório:'
                    width='w-[25rem]'
                    value={inputValues.title}
                    name='title'
                    onChange={handleChange}
                />

                <label className='flex flex-col mt-2 justify-between'>
                    Relatório:
                    <textarea
                        className='border h-[50vh] outline-none text-sm p-1'
                        value={inputValues.content}
                        name='content'
                        onChange={handleChange}
                    />
                </label>
                <div className='flex justify-between items-center pt-2'>
                    <button type='submit' className='p-2 bg-amber-400 font-Saira text-neutral-700 hover:bg-amber-400/80 transition-all'>SALVAR RELATÓRIO</button>
                    <p className='text-end text-sm text-neutral-400 font-light font-Saira'>Caracteres: {inputValues.content.length}</p>
                </div>
            </form>
        </div>
    )
}

export default NewReport