import { ref,remove,set,update } from 'firebase/database';
import React from 'react'
import { db } from '../database/firebase';
import { v4 as IdGenerator } from 'uuid'
import { AuthContext } from '../context/authContext';
import { useParams } from 'react-router-dom';



const useStudent = () => {

  const teacher = React.useContext( AuthContext )
  const { studentId } = useParams()
  const addNewStudent = async ( body,teacherId ) => {

    if ( Object.keys( body ).length === 0 ) return false;
    await set( ref( db,`teachers/${teacherId}/students/${IdGenerator()}` ),body )
      .then( console.log( 'aluno cadastrado com sucesso' ) )

  }

  const maskStudentAsInactive = async ( studentId ) => {

    if ( window.confirm( 'Deseja mesmo marcar esse estudante como inativo?' ) ) {
      update( ref( db,`teachers/${teacher.id}/students/${studentId}` ),{ status: 'inativo' } )
        .then( () => console.log( 'Aluno marcado como inativo' ) )
    }
  }

  const addNewReport = async ( studentId,body ) => {
    await set( ref( db,`teachers/${teacher.id}/students/${studentId}/reports/${IdGenerator()}` ),body )
    await update( ref( db,`teachers/${teacher.id}/students/${studentId}` ),{ last_report: Date.now() } )
      .then( () => console.log( 'relatório salvo com sucesso' ) )
  }


  const updateStudent = async ( studentId,body ) => {
    await update( ref( db,`teachers/${teacher.id}/students/${studentId}/` ),body )
      .then( () => console.log( 'dados atualizados com sucesso' ) )
  }


  const deleteReport = async ( reportId,studentId ) => {

    const refReport = ref( db,`teachers/${teacher.id}/students/${studentId}/reports/${reportId}` )
    await remove( refReport ).then( () => console.log( 'relatório excluído com sucesso' ) )
  }

  const updateReport = async ( studentId,reportId,body ) => {
    await update( ref( db,`teachers/${teacher.id}/students/${studentId}/reports/${reportId}/` ),body )
      .then( () => console.log( 'relatório atualizados com sucesso' ) )
  }


  const markFileAsRemoved = async ( fileId ) => {

    if ( window.confirm( 'Deseja realmente excluir esse arquivo?' ) ) {
      update( ref( db,`teachers/${teacher.id}/students/${studentId}/files/${fileId}` ),{ active: false } )
        .then( () => console.log( 'Arquivo marcado como inativo' ) )

    }

  }

  return { addNewStudent,maskStudentAsInactive,addNewReport,updateStudent,deleteReport,updateReport,markFileAsRemoved }
}

export default useStudent