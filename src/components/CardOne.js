import React from 'react'

const CardOne = ({ photo, fName, lName, gender, contact }) => {
  return (
    <div className='relative'>
      <div className='flex flex-col space-y-3 border-black rounded-lg border-4 px-10 pt-20 pb-5 items-center relative bg-white z-[2]'>
        <img className='size-28 rounded-lg mt-10' src={photo} alt={`${fName} ${lName}'s profile photo`} />
        <span className='font-extrabold text-xl'>{fName ? fName : 'X'} {lName ? lName : 'Y'}</span>
        <span className='font-semibold '>Gender: <span className='font-bold'>{gender === 'male' ? 'M' : 'F'}</span></span>
        <span className='font-semibold'>Contact: <span className='font-bold'>{contact ? contact : 'not available'}</span></span>
      </div>
      <div className='absolute w-full h-full bg-yellow-500 rounded-lg border-4 border-black z-[0] -bottom-2 -right-2'></div>
    </div>
  )
}

export default CardOne;
