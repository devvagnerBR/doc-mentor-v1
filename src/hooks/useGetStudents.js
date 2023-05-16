import React from "react"
import { AuthContext } from "../context/authContext"
import { onValue,ref } from "firebase/database"
import { db } from "../database/firebase"

const useGetStudents = () => {

    const [students,setStudents] = React.useState( [] )
    const teacher = React.useContext( AuthContext )

    React.useEffect( () => {

        const getStudents = async () => {
            const pathRef = ref( db,`teachers/${teacher?.id}` );
            onValue( pathRef,( snapshot ) => {
                let data = snapshot.val();
                const parsedStudents = Object.entries( data?.students ?? {} ).map( ( [key,value] ) => {

                    if ( data )
                        return {
                            id: key,
                            birth_day: value.birth_day,
                            class_name: value.class_name,
                            deficit: value.deficit,
                            parent_phone: value.parent_phone,
                            school_name: value.school_name,
                            service_days: value.service_days,
                            shift: value.shift,
                            status: value.status,
                            student_name: value.student_name,
                        }


                } )

                setStudents( parsedStudents )
            } )
        }


        getStudents()

    },[teacher] )

    return { students }

}

export default useGetStudents

/* 
                            id: key,
                            birth_day: value.birth_day,
                            class_name: value.class_name,
                            deficit: value.deficit,
                            parent_phone: value.parent_phone,
                            school_name: value.school_name,
                            service_days: value.service_days,
                            shift: value.shift,
                            status: value.status,
                            student_name: value.student_name,
*/


/* 

birth_day
: 
"1994-12-21"
class_name
: 
"3003 F2"
deficit
: 
"TDAH"
parent_phone
: 
"22999887464"
school_name
: 
"CNEC RO"
service_days
: 
"Segunda"
shift
: 
"Noite"
status
: 
"ativo"
student_name
: 
"Wagner Luiz da Silva Guimarães"
[[Prototype]]
: 
Object
*/