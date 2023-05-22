import React from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import useGetStudentById from '../../../../../../hooks/useGetStudentById'
import Input from './../../../../../../components/input/index';
import useStorage from '../../../../../../hooks/useStorage';
import { getDownloadURL } from 'firebase/storage';


const initialValues = {
    file_name: '',
    file: ''
}
const NewDocument = () => {

    const navigate = useNavigate()
    const { studentId } = useParams()
    const { student } = useGetStudentById( studentId )
    const [fields,setFields] = React.useState( initialValues )
    const { saveFileImage,saveImageAsURL } = useStorage()
    const handleChange = ( event ) => {
        const { name,value } = event.target;
        setFields( { ...fields,[name]: value } )
    }

    const handleSaveFile = async ( event ) => {
        event.preventDefault()


        try {

            const res = await saveFileImage( fields.file )
            const url = await getDownloadURL( res.ref )

            const body = {
                file_name: fields.file_name,
                file_date: Date.now(),
                file: url,
                active: true
            }

            await saveImageAsURL( body )

        } catch ( error ) {
            console.log( error );
        } finally {
            navigate( -1 )
        }

    }


    return (
        <div className='w-full h-full flex flex-col'>
            <header className='w-full flex h-25 justify-start items-start p-3 shrink-0 flex-col'>
                <div className='flex items-end justify-center gap-2'>
                    <h1 className='text-2xl font-Saira font-medium'>{student?.name}</h1>
                </div>

                <div className='flex gap-3 '>
                    <h2 className='text-neutral-500'>Escola: <span className='text-neutral-700'>{student?.school_name}</span></h2>
                    <h2 className='text-neutral-500'>Turma: <span className='text-neutral-700'>{student?.class_name}</span></h2>
                    <h2 className='text-neutral-500'>Turno: <span className='text-neutral-700'>{student?.shift}</span></h2>
                </div>
                <h2 className='text-neutral-500'>Idade: <span className='text-neutral-700'>{student?.age} anos</span></h2>
            </header>


            <form onSubmit={handleSaveFile} className='w-full h-full flex flex-col gap-4 p-3'>
                <Input
                    width="w-[25rem]"
                    label="Nome do arquivo:"
                    name="file_name"
                    value={fields.file_name}
                    onChange={handleChange}

                />
                <Input
                    type='file'
                    name="file"
                    onChange={e => setFields( { ...fields,file: e.target.files[0] } )}
                    width="w-[25rem]"
                    label="Selecione o arquivo:"
                />

                <button className='cursor-pointer bg-amber-400 w-[180px] p-2 flex items-center justify-center' type='onSubmit'>Salvar arquivo
                </button>

            </form>
        </div>
    )
}

export default NewDocument