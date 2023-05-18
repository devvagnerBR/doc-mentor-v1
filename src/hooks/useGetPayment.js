import React from 'react'
import { AuthContext } from '../context/authContext'
import { ref } from 'firebase/database'
import { db } from '../database/firebase'

const useGetPayment = () => {

    const [paymentInfo,setPaymentInfo] = React.useState( [] )
    const teacher = React.useContext( AuthContext )

    React.useEffect( () => {

        const getPaymentInfos = async () => {
            const pathRef = ref( db,`teachers/${teacher?.id}/payments/` );
        }


        getPaymentInfos()

    },[paymentInfo,setPaymentInfo,teacher] )



    return { paymentInfo }

}

export default useGetPayment