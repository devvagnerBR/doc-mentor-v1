import { onValue,ref } from 'firebase/database'
import React from 'react'
import { db } from '../database/firebase'
import { AuthContext } from '../context/authContext'
import { useParams } from 'react-router-dom'

const useGetReport = () => {


    const teacher = React.useContext( AuthContext )
    const [report,setReport] = React.useState( null )
    const { studentId,reportId } = useParams()

    React.useEffect( () => {

        const getReport = async () => {
            const pathRef = ref( db,`teachers/${teacher?.id}/students/${studentId}/reports/${reportId}` );
            onValue( pathRef,( snapshot ) => {
                let data = snapshot.val()
                if ( data ) setReport( data )
            } )


        }

        getReport()
    },[teacher,studentId,setReport] )




    return { report }


}

export default useGetReport