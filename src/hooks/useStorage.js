import { ref,uploadBytesResumable } from 'firebase/storage';
import { set,ref as refDB,onValue } from "firebase/database";
import React from 'react'
import { db,storage } from '../database/firebase';
import { AuthContext } from '../context/authContext';
import { useParams } from 'react-router-dom';
import { v4 as idGenerator } from 'uuid'
const useStorage = () => {

    const teacher = React.useContext( AuthContext )
    const { studentId } = useParams()
    const saveFileImage = async ( file ) => {

        try {
            const imageRef = ref( storage,`teachers/${teacher.id}/files` );
            const res = await uploadBytesResumable( imageRef,file );
            console.log( '[1] imagem salva com sucesso' );
            return res;

        } catch ( error ) {
            console.log( error );
        }
    }

    const saveImageAsURL = async ( body ) => {

        try {

            await set( refDB( db,`teachers/${teacher.id}/students/${studentId}/files/${idGenerator()}` ),body )
            console.log( '[2] imagem de perfil salva com sucesso' )

        } catch ( error ) {
            console.log( error );
        }
    }


    return { saveFileImage,saveImageAsURL }

}

export default useStorage