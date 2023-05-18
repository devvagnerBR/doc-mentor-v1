import React from 'react'



export const StudentContext = React.createContext( '' )

const StudentContentProvider = ( { children } ) => {

    const [student,setStudent] = React.useState( '' )
    const [report,setReport] = React.useState( '' )


    return (
        <StudentContext.Provider value={{ student,setStudent,report,setReport }}>
            {children}
        </StudentContext.Provider>
    )
}

export default StudentContentProvider