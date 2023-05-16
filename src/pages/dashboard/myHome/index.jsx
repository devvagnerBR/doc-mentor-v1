import React from 'react'
import useTeacher from '../../../hooks/useTeacher'

const MyHome = () => {

  const { sigInWithGoogle ,teacher} = useTeacher()

  const handleLogin = async () => {
    await sigInWithGoogle()
  }


  return (
    <div>
      MyHome
      <button type='onSubmit' onClick={handleLogin}>GOOGLE LOGIN</button>
    </div>
  )
}

export default MyHome