import { onValue,ref } from 'firebase/database'
import React from 'react'
import { db } from '../database/firebase'
import { AuthContext } from '../context/authContext'

const useGetStudentById = ( studentId ) => {

    const [student,setStudent] = React.useState( null )
    const teacher = React.useContext( AuthContext )

    React.useEffect( () => {

        const getStudent = async () => {

            const pathRef = ref( db,`teachers/${teacher?.id}/students/${studentId}/` );
            onValue( pathRef,( snapshot ) => {
                let key = snapshot.key
                let data = snapshot.val()

                if ( data )
                    setStudent( {
                        id: key,
                        name: data.student_name,
                        status: data.status,
                        shift: data.shift,
                        service_days: data.service_days,
                        school_name: data.school_name,
                        parent_phone: data.parent_phone,
                        last_report: data.last_report,
                        deficit: data.deficit,
                        class_name: data.class_name,
                        birth_day: data.birth_day,
                        age: data.age,
                        reports: Object.entries( data.reports ?? {} ).map( ( [key,value] ) => {
                            return {id: key, content: value.content,report_date: value.report_date, title: value.title}
                        } )
                    } )



     
            } )



        }


        getStudent()
    },[studentId,teacher,setStudent] )





    return { student }

}

export default useGetStudentById