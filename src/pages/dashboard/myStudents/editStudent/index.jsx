import React from 'react'
import Input from '../../../../components/input';
import useStudent from '../../../../hooks/useStudent';
import { useNavigate } from 'react-router-dom';


const formInitial = {
    student_name: '',
    birth_day: '',
    school_name: '',
    class_name: '',
    shift: '',
    service_days: '',
    parent_phone: '',
    deficit: '',

}

const EditStudent = () => {

    const navigate = useNavigate()
    const { updateStudent } = useStudent()
    const [studentDetails,setStudentDetails] = React.useState( JSON.parse( window.localStorage.getItem( 'student' ) ) )
    const [inputValues,setInputValues] = React.useState( formInitial );



    const handleChange = ( event ) => {
        const { name,value } = event.target;
        setInputValues( { ...inputValues,[name]: value } )
    };

    const handleUpdateStudent = async ( event ) => {
        event.preventDefault()
        await updateStudent( studentDetails.id,studentDetails )
        navigate(-1)
    }


    return (


        <div className='w-full h-full flex flex-col p2 gap-2 '>
            <header className='w-full flex h-14 justify-start items-start p-3 shrink-0 flex-col '>
                <h1 className='text-2xl font-Saira font-medium'>Editar dados do aluno</h1>
            </header>

            <form onSubmit={handleUpdateStudent}>

                <section className=' w-full px-3 flex gap-3 '>
                    <Input
                        label='Nome do aluno:'
                        type='text'
                        width='w-[25rem]'
                        value={studentDetails.student_name}
                        name='student_name'
                        onChange={( e ) => setStudentDetails( { ...studentDetails,student_name: e.target.value } )}
                    />
                    <Input
                        label='Data de nascimento:'
                        type='date'
                        width='w-[25rem]'
                        value={studentDetails.birth_day}
                        onChange={handleChange}
                        name='birth_day'
                    />
                </section>

                <section className='px-3 w-full flex gap-3'>
                    <Input
                        label='Nome da Escola:'
                        type='text'
                        width='w-[25rem]'
                        value={studentDetails.school_name}
                        onChange={( e ) => setStudentDetails( { ...studentDetails,school_name: e.target.value } )}
                        name='school_name'
                    />
                    <Input
                        label='Turma:'
                        type='text'
                        width='w-[12.2rem]'
                        value={studentDetails.class_name}
                        onChange={( e ) => setStudentDetails( { ...studentDetails,class_name: e.target.value } )}
                        name='class_name'
                    />
                    <Input
                        label='Turno:'
                        type='text'
                        width='w-[12.2rem]'
                        value={studentDetails.shift}
                        onChange={( e ) => setStudentDetails( { ...studentDetails,shift: e.target.value } )}
                        name='shift'
                    />
                </section>

                <section className='px-3 w-full flex gap-3'>
                    <Input
                        label='Dias de atendimento:'
                        type='text'
                        width='w-[25rem]'
                        value={studentDetails.service_days}
                        onChange={( e ) => setStudentDetails( { ...studentDetails,service_days: e.target.value } )}
                        name='service_days'
                    />
                    <Input
                        label='Telefone do responsável:'
                        type='number'
                        width='w-[25rem]'
                        value={studentDetails.parent_phone}
                        onChange={( e ) => setStudentDetails( { ...studentDetails,parent_phone: e.target.value } )}
                        name='parent_phone'
                    />
                </section>
                <section className='px-3 w-full flex gap-3'>
                    <Input
                        label='Deficiência:'
                        type='text'
                        width='w-[50.75rem]'
                        value={studentDetails.deficit}
                        onChange={( e ) => setStudentDetails( { ...studentDetails,deficit: e.target.value } )}
                        name='deficit'
                    />
                </section>

                <button type='submit' className='px-3 mx-3 mt-3 w-52 p-2 rounded-sm bg-amber-400 text-neutral-700'>Salvar dados</button>

            </form>
        </div>


    )
}

export default EditStudent