import React from 'react'

const Header = () => {
    return (
        <header className='h-20  border-b   w-full flex items-center justify-end pr-4 gap-2'>
            <div className='flex flex-col  items-end h-9 justify-center'>
                <h1 className='text-xs text-neutral-700 leading-[5px] font-Saira'>Bem vindo (a)</h1>
                <h1 className='text-sm text-neutral-800 font-medium font-Saira'>Neymar Jr</h1>
            </div>
            <div className='w-9 h-9 flex rounded-full overflow-hidden items-center justify-center shadow-sm cursor-pointer'>
                <img className='flex items-center justify-center rounded-full overflow-hidden' src="https://www.themoviedb.org/t/p/original/8887Hq0XyckSVy7xfHIUikt7qRO.jpg" alt="" />
            </div>
        </header>
    )
}

export default Header