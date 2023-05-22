import React from 'react'
import { AuthContext } from '../context/authContext'
import { onValue,ref } from 'firebase/database'
import { db } from '../database/firebase'
import { useParams } from 'react-router-dom'

const useGetFiles = () => {

    const { studentId } = useParams()
    const [files,setFiles] = React.useState( [] )
    const teacher = React.useContext( AuthContext )


    React.useEffect( () => {

        const getFiles = async () => {

            const filesRef = ref( db,`teachers/${teacher.id}/students/${studentId}` );
            onValue( filesRef,( snapshot ) => {
                let data = snapshot.val();
                const parsedFiles = Object.entries( data?.files ?? {} ).map( ( [key,value] ) => {
                    if ( data )
                        return {

                            id: key,
                            url: value.file,
                            file_name: value.file_name,
                            file_date: value.file_date,
                            active: value.active
                        }

                } )
                setFiles( parsedFiles )
            } )

        }

        getFiles()

    },[teacher,setFiles] )




    return { files }

}

export default useGetFiles