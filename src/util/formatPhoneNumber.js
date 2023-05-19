export const formatPhoneNumber = ( phone ) => {

    const clearNumber = phone.replace( /\D/g,'' )
    const formattedNumber = clearNumber.replace( /^(\d{2})(\d{5})(\d{4})$/,'($1) $2-$3' )
    return formattedNumber
}