import React from 'react'
import { auth,db } from '../database/firebase'
import { ref,update, } from 'firebase/database';
import { GoogleAuthProvider,onAuthStateChanged,signInWithPopup,signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import 'moment/dist/locale/pt-br';


const useTeacher = () => {


    const navigate = useNavigate()
    const [teacher,setTeacher] = React.useState( [] )
    const provider = new GoogleAuthProvider;

    const checkForUpdate = async () => {

        onAuthStateChanged( auth,async ( user ) => {

            if ( user ) {
                const { displayName,photoURL,uid,email } = user
                if ( !displayName,!photoURL ) {
                    throw new Error( 'Missing information from Google Account' )
                }
                await updateData( ( `teachers/${uid}/infos/` ),{ id: uid,name: displayName,avatar: photoURL,email: email} )
                setTeacher( { id: uid,name: displayName,avatar: photoURL,email: email } )

            }
        } )

    }

    const updateData = async ( path,body ) => {

        const updates = {}
        updates[path] = body
        return await update( ref( db ),updates )
       


    }


    const sigInWithGoogle = async () => {
        const result = await signInWithPopup( auth,provider )
        GoogleAuthProvider.credentialFromResult( result )
        if ( result.user ) {
            const { displayName,photoURL,uid,email } = result.user
            if ( !displayName,!photoURL ) {
                throw new Error( 'Missing information from Google Account' )
            }

            await updateData( ( `teachers/${uid}/infos/` ),{ id: uid,name: displayName,avatar: photoURL,email: email } )
            setTeacher( { id: uid,name: displayName,avatar: photoURL,email: email } )

        }
    }

    const logOut = async () => {

        await signOut( auth ).then( () => {
            console.log( 'usuário deslogado com sucesso' );
            navigate( '/' )
        } )
    }

    return { checkForUpdate,sigInWithGoogle,teacher,updateData,logOut }
}

export default useTeacher