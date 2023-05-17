import React from 'react'

const Input = ( { onChange,value,label,name,width,height,type = 'text' } ) => {

    return (
        <label className='flex flex-col shrink-0 break-words'>
            {label}
            <input
                className={`flex items-end justify-end break-words  border p-2 outline-none ${width} ${height} text-neutral-700`}
                type={type}
                onChange={onChange}
                value={value}
                name={name}
            />

        </label>
    )
}

export default Input