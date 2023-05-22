import { FilePlus } from '@phosphor-icons/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Documents = () => {
    return (
        <div className='w-full h-full flex flex-col'>
            <header className='w-full flex  h-25 justify-start gap-4 items-end p-3 shrink-0 '>
                <div className=' flex gap-3'>
                    <h1 className='font-medium font-Saira text-xl'>Documentos:</h1>
                </div>
                <Link to="novo-documento" className='flex items-center gap-1 font-Saira text-amber-400 underline'>
                    <FilePlus size={20} />
                    Novo documento
                </Link>
            </header>
        </div>
    )
}

export default Documents