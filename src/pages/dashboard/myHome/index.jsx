import React from 'react'
import useTeacher from '../../../hooks/useTeacher'

const MyHome = () => {

  const { sigInWithGoogle,teacher,signInWithGoogle2 } = useTeacher()

  const handleLogin = async () => {
    await signInWithGoogle2()
  }


  return (
    <div>
      MyHome
      <button type='onSubmit' onClick={handleLogin}>GOOGLE LOGIN</button>
    </div>
  )
}

export default MyHome