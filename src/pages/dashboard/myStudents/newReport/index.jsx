import React from 'react'
import { StudentContext } from '../../../../context/studentsContext'
import Input from '../../../../components/input'
import useStudent from '../../../../hooks/useStudent'
import { useNavigate,useParams } from 'react-router-dom'
import useGetStudentById from '../../../../hooks/useGetStudentById'

const formInitial = {
    title: '',
    content: '',
}

const NewReport = () => {


    const navigate = useNavigate()
    const { addNewReport } = useStudent()
    const [inputValues,setInputValues] = React.useState( formInitial );
    const { studentId } = useParams()
    const { student } = useGetStudentById( studentId )



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


        await addNewReport( studentId,body )
        setInputValues( formInitial )
        navigate( -1 )

    }




    return (

        <div className='w-full h-full flex flex-col'>
            <header className='w-full flex h-25 justify-start items-start p-3 shrink-0 flex-col'>
                <div className='flex items-end justify-center gap-2'>
                    <h1 className='text-2xl font-Saira font-medium'>{ }</h1>
                    <div>
                        <h1 className=' font-Saira underline  text-amber-400 cursor-pointer'>editar aluno</h1>
                    </div>
                </div>

                <div className='flex gap-3'>
                    <h2 className='text-neutral-500'>Escola: <span className='text-neutral-700'>{student?.name}</span></h2>
                    <h2 className='text-neutral-500'>Turma: <span className='text-neutral-700'>{student?.class_name}</span></h2>
                    <h2 className='text-neutral-500'>Turno: <span className='text-neutral-700'>{student?.shift}</span></h2>
                </div>
                <h2 className='text-neutral-500'>Idade: <span className='text-neutral-700'>{student?.age} anos</span></h2>
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