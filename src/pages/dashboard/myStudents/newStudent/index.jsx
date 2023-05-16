import React from 'react'
import Input from '../../../../components/input'

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

const NewStudent = () => {

    const [inputValues,setInputValues] = React.useState( formInitial );

    const handleChange = ( event ) => {
        const { name,value } = event.target;
        setInputValues( { ...inputValues,[name]: value } )
    };


    return (
        <div className='w-full h-full flex flex-col p2 gap-2   '>

            <header className='w-full flex h-14 justify-start items-start p-3 shrink-0 flex-col '>
                <h1 className='text-2xl font-Saira font-medium'>Novo Aluno</h1>
            </header>
            <form action="">


                <section className=' w-full px-3 flex gap-3 '>
                    <Input
                        label='Nome do aluno:'
                        type='text'
                        width='w-[25rem]'
                        value={inputValues.student_name}
                        name='student_name'
                        onChange={handleChange}
                    />
                    <Input
                        label='Data de nascimento:'
                        type='date'
                        width='w-[25rem]'
                        value={inputValues.birth_day}
                        onChange={handleChange}
                        name='birth_day'
                    />
                </section>

                <section className='px-3 w-full flex gap-3'>
                    <Input
                        label='Nome da Escola:'
                        type='text'
                        width='w-[25rem]'
                        value={inputValues.school_name}
                        onChange={handleChange}
                        name='school_name'
                    />
                    <Input
                        label='Turma:'
                        type='text'
                        width='w-[12.2rem]'
                        value={inputValues.class_name}
                        onChange={handleChange}
                        name='class_name'
                    />
                    <Input
                        label='Turno:'
                        type='text'
                        width='w-[12.2rem]'
                        value={inputValues.shift}
                        onChange={handleChange}
                        name='shift'
                    />
                </section>

                <section className='px-3 w-full flex gap-3'>
                    <Input
                        label='Dias de atendimento:'
                        type='text'
                        width='w-[25rem]'
                        value={inputValues.service_days}
                        onChange={handleChange}
                        name='service_days'
                    />
                    <Input
                        label='Telefone do responsável:'
                        type='number'
                        width='w-[25rem]'
                        value={inputValues.parent_phone}
                        onChange={handleChange}
                        name='parent_phone'
                    />
                </section>
                <section className='px-3 w-full flex gap-3'>
                    <Input
                        label='Deficiência:'
                        type='text'
                        width='w-[50.75rem]'
                        value={inputValues.deficit}
                        onChange={handleChange}
                        name='deficit'
                    />
                </section>

                <button type='submit' className='px-3 mx-3 mt-3 w-52 p-2 rounded-sm bg-amber-400 text-neutral-700'>Cadastrar novo aluno</button>

            </form>
        </div>
    )
}

export default NewStudent