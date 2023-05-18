import React from 'react'
import { AuthContext } from '../context/authContext'
import { ref,update } from 'firebase/database'
import { db } from '../database/firebase'

const usePayment = () => {

    const teacher = React.useContext( AuthContext )

    const setPaymentDate = async ( date ) => {

        await update( ref( db,`teachers/${teacher.id}/payment/` ),{ payment_date: date } )
            .then( () => console.log( 'premium liberado' ) )


    }




    return { setPaymentDate }
}

export default usePayment