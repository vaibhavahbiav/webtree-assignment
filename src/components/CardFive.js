import React from 'react'

const CardFive = ({ photo, fName, lName, gender, contact }) => {
    return (
        <div className='w-fit h-fit overflow-clip group flex flex-col items-center px-5 py-3 rounded-xl hover:bg-gray-900 duration-1000 transition-colors cursor-pointer'>
            <div className='rounded-full overflow-clip group-hover:rotate-[360deg] group-hover:opacity-0 group-hover:translate-x-[200px] duration-1000'>
                <img className='size-full' src={photo} alt={`${fName} ${lName}'s photo`} />
            </div>
            <div className='flex flex-col space-y-5 opacity-0 blur-sm group-hover:-translate-y-14 group-hover:opacity-100 group-hover:blur-0 duration-1000'>
                <span className='text-xl font-bold text-purple-500'>{fName} {lName}</span>
                <span className='text-base text-white font-normal'>Gender: <span className={`${gender==='male'?' text-blue-500': 'text-pink-500'} font-semibold text-lg`}>{gender === 'male' ? 'M' : 'F'}</span></span>
                <span className='text-base font-normal text-white'>Contact: <span className='text-purple-500'>{contact}</span></span>
            </div>
        </div>
    )
}

export default CardFive;
