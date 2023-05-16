import React from 'react'
import useTeacher from '../hooks/useTeacher'


export const AuthContext = React.createContext( '' )

const AuthContextProvider = ( { children } ) => {


    const { checkForUpdate,teacher } = useTeacher()
    const infos = useTeacher()

    React.useEffect( () => {
        checkForUpdate()

    },[] )



    return (
        <AuthContext.Provider value={teacher}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider