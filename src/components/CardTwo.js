import React from 'react'

const CardTwo = ({ photo, fName, lName, gender, contact }) => {
    return (
        <div className='bg-white rounded-md flex flex-col relative pb-3 px-3 w-[300px] h-[230px] group space-y-5'>
            <img className='absolute -top-10 rounded-md size-32 self-center group-hover:top-2 group-hover:transition-all group-hover:duration-500 group-hover:drop-shadow-lg duration-500' src={photo} alt={`${fName} ${lName}'s profile photo`} />
            <div className='flex flex-col absolute bottom-0 right-0 px-3 pb-3 w-full'>
                <span className='self-start text-left font-light'>{fName ? fName : 'X'} {lName ? lName : 'Y'}</span>
                <span className='self-start text-left font-light capitalize'>{gender}</span>
                <span className='w-fit self-end font-light border-slate-300 border-2 rounded-md cursor-pointer px-3 group-hover:bg-slate-300 group-hover:transition-colors group-hover:delay-200 group-hover:duration-300 duration-300'>{contact ? contact : 'not available'}</span>
            </div>
        </div>
    )
}

export default CardTwo;