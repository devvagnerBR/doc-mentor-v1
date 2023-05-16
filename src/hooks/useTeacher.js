import React from 'react'
import { auth,db } from '../database/firebase'
import { ref,remove,update,onValue } from 'firebase/database';
import { GoogleAuthProvider,onAuthStateChanged,signInWithPopup } from 'firebase/auth'
import convertObjInArray from '../util/convertObjInArray';


const useTeacher = () => {

    const [teacher,setTeacher] = React.useState( null )
    const [data,setData] = React.useState( null )


    const sigInWithGoogle = async () => {

        const provider = new GoogleAuthProvider()
        const result = await signInWithPopup( auth,provider );

        if ( result.user ) {
            const { displayName,photoURL,uid,email } = result.user
            if ( !displayName,!photoURL ) {
                throw new Error( 'Missing information from Google Account' )
            }

            await updateData( `teachers/${user.id}/infos`,{ id: uid,name: displayName,avatar: photoURL,email: email } )
            setTeacher( { id: uid,name: displayName,avatar: photoURL,email: email } )
        }


    }

    const checkForUpdate = async () => {

        onAuthStateChanged( auth,( user ) => {

            if ( user ) {
                const { displayName,photoURL,uid,email } = user
                if ( !displayName,!photoURL ) {
                    throw new Error( 'Missing information from Google Account' )
                }
                updateData( ( `teachers/${uid}/infos/` ),{ id: uid,name: displayName,avatar: photoURL,email: email } )
                setTeacher( { id: uid,name: displayName,avatar: photoURL,email: email } )
            }
        } )

    }

    const updateData = async ( path,body ) => {

        const updates = {}
        updates[path] = body
        return await update( ref( db ),updates )
        // .then( () => console.log( 'dados atualizados com sucesso' ) )


    }



    // const getStudents = ( path ) => {



    //     const refData = ref( db,`${path}` );
    //     onValue( refData,( snapshot ) => {
    //         let result = snapshot.val()
    //         if ( result ) {
    //             result = convertObjInArray( result )
    //             setData( result );
    //         }

    //     } )


    // }




    return { checkForUpdate,sigInWithGoogle,teacher,updateData}
}

export default useTeacher