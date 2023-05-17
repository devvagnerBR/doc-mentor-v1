import React from "react"
import { AuthContext } from "../context/authContext"
import { onValue,ref } from "firebase/database"
import { db } from "../database/firebase"
import { useParams } from "react-router-dom"

const useGetReports = () => {

    const { studentId } = useParams()
    const teacher = React.useContext( AuthContext )
    const [reports,setReports] = React.useState( [] )

    React.useEffect( () => {

        const getReports = async () => {

            const pathRef = ref( db,`teachers/${teacher?.id}/students/${studentId}` );
            onValue( pathRef,( snapshot ) => {
                let data = snapshot.val();
                const parsedReports = Object.entries( data?.reports ?? {} ).map( ( [key,value] ) => {

                    if ( data )
                        return {

                            id: key,
                            content: value.content,
                            title: value.title,
                            report_date: value.report_date
                        }


                } )

                setReports( parsedReports )
            } )
        }


        getReports()

    },[studentId,setReports,teacher] )




    return { reports }

}

export default useGetReports
