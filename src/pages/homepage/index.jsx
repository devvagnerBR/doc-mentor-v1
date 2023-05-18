import React from 'react'
import { GoogleLogo } from '@phosphor-icons/react'
import useTeacher from '../../hooks/useTeacher'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../context/authContext'

const Homepage = () => {

    const { sigInWithGoogle } = useTeacher()
    const teacher = React.useContext( AuthContext )
    const navigate = useNavigate()
    const handleSignIn = async () => {

        if ( teacher.length === 0 ) await sigInWithGoogle()
        navigate( '/dashboard/meus-alunos' )
    }

    return (
        <div className='bg-neutral-700 h-100dvh w-100dvw flex items-center justify-center'>
            <div className='bg-neutral-800/70 w-[400px] h-[300px] flex-col rounded-sm flex items-center justify-center gap-8 p-2'>

                <header className='w-full flex flex-col items-center justify-center gap-2'>
                    <h1 className='font-Saira text-5xl text-neutral-300'>Entrar</h1>
                    <h1 className='text-neutral-400 font-Saira'>Bem vindo ao <span className='text-amber-400'> DOC</span> MENTOR</h1>
                </header>

                <div onClick={() => handleSignIn()} className='px-4 py-1 bg-amber-400 flex items-center justify-center rounded-sm gap-2 cursor-pointer hover:bg-amber-300 transition-all'>
                    <GoogleLogo className='text-neutral-700' size={36} />
                    <p className='text-neutral-700 hover:text-neutral-800'> Entrar com o Google</p>
                </div>
            </div>
        </div>

    )



}

export default Homepage