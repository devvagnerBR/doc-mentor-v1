import { ref,set } from 'firebase/database';
import React from 'react'
import { db } from '../database/firebase';
import { v4 as IdGenerator } from 'uuid'



const useStudent = () => {


  const addNewStudent = async ( body,teacherId ) => {

    if ( Object.keys( body ).length === 0 ) return false;
    await set( ref( db,`teachers/${teacherId}/students/${IdGenerator()}` ),body )
      .then( console.log( 'aluno cadastrado com sucesso' ) )

  }



  return { addNewStudent }
}

export default useStudent