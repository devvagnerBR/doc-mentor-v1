import React from 'react'
import useTeacher from '../../../hooks/useTeacher'

const MyHome = () => {

  const { sigInWithGoogle,teacher,signInWithGoogle2 } = useTeacher()

  const handleLogin = async () => {
    await signInWithGoogle2()
  }


  return (
    <div>
      
      <button type='onSubmit'onClick={handleLogin}>MyHome Page</button>
    </div>
  )
}

export default MyHome