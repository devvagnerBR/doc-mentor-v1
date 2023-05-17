import React from 'react'



export const StudentContext = React.createContext( '' )

const StudentContentProvider = ( { children } ) => {

    const [student,setStudent] = React.useState( '' )


    return (
        <StudentContext.Provider value={{ student,setStudent }}>
            {children}
        </StudentContext.Provider>
    )
}

export default StudentContentProvider