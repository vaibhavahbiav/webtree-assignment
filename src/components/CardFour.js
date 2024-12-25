import React from 'react'

const CardFour = ({ photo, fName, lName, gender, contact }) => {
    return (
        <div className='h-20 w-[250px] relative z-0 group cursor-pointer'>
            <div className='h-full w-full rounded-full bg-purple-500 flex justify-between space-x-5 overflow-clip z-[300] hover:border-4 hover:border-white duration-100 delay-100'>
                <img className='group-hover:rounded-full duration-100 delay-100' src={photo} alt={`${fName} ${lName}'s photo`} />
                <div className='flex flex-col space-y-0 text-right items-end justify-center text-white text-sm font-semibold pr-5 group-hover:text-base delay-100 duration-100'>
                    <span className=''>{fName} {lName}</span>
                    <span className=''>{contact}</span>
                    <span className=''>{gender === 'male' ? 'M' : 'F'}</span>
                </div>
            </div>
            <div className=' w-full h-full border-2 border-black rounded-full left-[5px] bottom-[10px] -z-[2] absolute bg-pink-400 group-hover:bottom-0 group-hover:left-0 group-hover:border-none duration-100'></div>
            <div className=' w-full h-full border-2 border-black rounded-full left-[10px] bottom-[20px] -z-[3] absolute bg-blue-200 group-hover:bottom-0 group-hover:left-0 group-hover:border-none duration-100'></div>
        </div>
    )
}

export default CardFour;
