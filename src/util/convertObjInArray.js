const convertObjInArray = ( obj ) => {

    const ref = obj
    const newObj = Array.from( Object.values( ref ) )
    return newObj
}

export default convertObjInArray