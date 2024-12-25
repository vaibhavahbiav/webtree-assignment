import React from 'react'

const CardThree = ({ photo, fName, lName, gender, contact }) => {
    return (
        <div className='relative'>
            <div className='w-80 h-80 relative bg-white border-2 border-black z-[1]'>
                <img className='size-[95%] self-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-[2]' src={photo} alt={`${fName} ${lName}'s photo`} />
                <div className='bottom-4 right-4 absolute z-[2] text-xl font-thin text-white bg-black/50 px-5 py items-end text-right flex flex-col space-x-3'>
                    <span className=''>{fName} {lName}</span>
                    <span className=''>{contact}</span>
                    <span className=''>{gender === 'male' ? 'M' : 'F'}</span>
                </div>
            </div>
            <div className='absolute block w-80 h-80 bg-transparent border-dashed border-2 -bottom-2 -right-2 border-black z-[0]'></div>
        </div>
    )
}

export default CardThree;
