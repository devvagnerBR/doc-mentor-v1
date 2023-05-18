import React from 'react'
import { HouseLine,Backpack,AddressBook,ChalkboardSimple,SignOut } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import useTeacher from '../../hooks/useTeacher'

import moment from 'moment';
import 'moment/dist/locale/pt-br';
import { AuthContext } from './../../context/authContext';

const SideBar = () => {

    // const teacher = React.useContext( AuthContext )
    const navItems = [
        { id: 1,icon: HouseLine,content: 'Início',path: '/dashboard' },
        { id: 2,icon: Backpack,content: 'Meus alunos',path: 'meus-alunos' },
        { id: 3,icon: AddressBook,content: 'Meus dados',path: 'meus-dados' },
        { id: 4,icon: ChalkboardSimple,content: 'Minhas escolas',path: 'minhas-escolas' },
    ]

    const { logOut } = useTeacher()

    // const today = moment()

    // const expiresDate = today.add( 30,'days' )
    //console.log( expiresDate.format( 'LL' ) );
    //console.log( teacher.payment_date );

    /* 
        const today = Date.now()

   
    console.log( moment(today).format('LLL') );
    */
    return (
        <div className='bg-neutral-800 w-60 h-full flex items-center flex-col justify-start  shrink-0'>

            <header className='h-20 w-full flex items-center justify-center shrink-0'>
                <h1
                    className='font-Alata text-gray-50 font-medium'>
                    <span
                        className='text-amber-400 text-[17px]'>
                        DOC{" "}
                    </span>
                    MENTOR</h1>
            </header>

            <nav className=' w-full h-full nav-active flex flex-col p-4 gap-2 '>
                {navItems.map( ( item ) => {

                    return (
                        <NavLink to={item.path} end={item.path === '/dashboard'} key={item.id} className='w-full nav-active h-6 flex items-center cursor-pointer justify-start gap-3'>
                            <item.icon size={22} className='text-neutral-700' />
                            <h1 className='text-neutral-700 font-light'>{item.content}</h1>
                        </NavLink>
                    )
                } )}
            </nav>

            <div className='flex h-20 items-center flex-col w-full justify-start px-3 gap-2'>
                <div onClick={() => logOut()} className=' flex gap-2 items-center cursor-pointer'>
                    <SignOut size={25} className='text-neutral-300 cursor-pointer' />
                    <p className='text-stone-300 text-sm'>Sair</p>
                </div>

                <p className='text-stone-300 text-sm pb-2'>{moment().format( 'LL' )}</p>
            </div>
        </div>
    )
}

export default SideBar