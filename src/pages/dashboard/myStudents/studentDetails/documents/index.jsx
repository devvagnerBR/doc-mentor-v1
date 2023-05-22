import { FilePlus,Trash } from '@phosphor-icons/react'
import React from 'react'
import { Link } from 'react-router-dom'
import useGetFiles from '../../../../../hooks/useGetFiles'
import moment from 'moment';
import 'moment/dist/locale/pt-br';
import useStudent from '../../../../../hooks/useStudent';

const Documents = () => {

    const { files } = useGetFiles()
    const { markFileAsRemoved } = useStudent()

    const handleDeleteFile = async ( file ) => {
        await markFileAsRemoved( file.id )
    }

    const onlyShowActiveFiles =  () => {
        const copyFiles = files
        const filteredFiles = copyFiles.filter( file => file.active === true )
        return filteredFiles
    }

    const activeFiles = onlyShowActiveFiles()

    return (
        <div className='w-full h-full flex flex-col p-3'>
            <header className='w-full flex  h-25 justify-start gap-4 items-end shrink-0 '>
                <div className=' flex gap-3'>
                    <h1 className='font-medium font-Saira text-xl'>Documentos:</h1>
                </div>
                <Link to="novo-documento" className='flex items-center gap-1 font-Saira text-amber-400 underline'>
                    <FilePlus size={20} />
                    Novo documento
                </Link>
            </header>

            <main className='w-full h-full flex justify-start items-start gap-8'>
                {activeFiles.length === 0 ? 'Nenhum arquivo encontrado' :
                    <>
                        <div>
                            <p className='text-neutral-300 font-light '>Num</p>
                            {activeFiles?.map( ( file,index ) => {
                                return <p key={file?.id}>{index + 1}</p>
                            } )}
                        </div>
                        <div>
                            <p className='text-neutral-300 font-light '>Nome do Arquivo</p>
                            {activeFiles?.map( ( file ) => {
                                return <a
                                    key={file.id}
                                    href={file?.url}
                                    target='_blank'
                                    className='flex cursor-pointer underline'
                                >
                                    {file?.file_name}
                                </a>
                            } )}
                        </div>
                        <div>
                            <p className='text-neutral-300 font-light '>Data</p>
                            {activeFiles?.map( ( file ) => {
                                return (
                                    <div
                                        key={file.id}
                                        className='flex items-center gap-2'>
                                        <p>{moment( file?.file_date ).format( 'DD-MM-YYYY' )}</p>
                                        <Trash className='cursor-pointer' onClick={() => handleDeleteFile( file )} />
                                    </div>
                                )
                            } )}
                        </div>
                    </>}
            </main>

        </div>
    )
}

export default Documents