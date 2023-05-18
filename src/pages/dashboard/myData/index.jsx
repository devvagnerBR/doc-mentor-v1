import React from 'react'
import useTeacher from '../../../hooks/useTeacher'
import { AuthContext } from '../../../context/authContext';
import useGetStudents from './../../../hooks/useGetStudents';
import { Link } from 'react-router-dom';

const MyData = () => {


  const teacher = React.useContext( AuthContext )
  const { students } = useGetStudents()
  console.log( teacher );


  return (
    <div className='w-full h-full flex flex-col'>
      <header className='w-full flex h-25 justify-start items-start p-3 shrink-0 flex-col'>
        <div className='flex items-end justify-center gap-2'>
          <h1 className='text-2xl font-Saira font-medium'>Meus dados</h1>
          <div>
            <Link to={``} className=' font-Saira underline  text-amber-400 cursor-pointer'>editar dados</Link>
          </div>
        </div>

        <div className='flex flex-col'>
          <h2 className='text-neutral-500'>Nome: <span className='text-neutral-700'>{teacher.name}</span></h2>
          <h2 className='text-neutral-500'>Email: <span className='text-neutral-700'>{teacher.email}</span></h2>
        </div>
      </header>
    </div>
  )
}

export default MyData