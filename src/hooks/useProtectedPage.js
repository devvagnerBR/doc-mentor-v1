import React from 'react'
import { useNavigate } from 'react-router-dom'

export const useProtectedPage = ( user ) => {

    const navigate = useNavigate()

    React.useEffect( () => {

        if ( !user ) return navigate( '/' )

    },[navigate] )


    return
}


export default useProtectedPage