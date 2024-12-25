import React from 'react'

const CardSix = ({ photo, fName, lName, gender, contact, titles }) => {
  return (
    <div className='w-80 h-44 bg-gradient-to-tr from-sky-300 from-20% via-teal-400 via-50% to-emerald-400 to-90% shadow-lg relative rounded-md'>
      <img className='size-14 bottom-3 right-4 absolute rounded-md shadow-lg' src={photo} alt={`${fName} ${lName}'s photo`} />
      <span className='absolute top-10 left-3 uppercase text-xs tracking-tighter font-semibold text-gray-800'>{titles}. </span>
      <p className='absolute top-12 text-left left-3 uppercase'><span className='text-2xl font-semibold text-gray-900 tracking-widest'>{fName} {lName}</span></p>
      <span className='absolute bottom-4 text-left left-3 tracking-wider uppercase font-medium text-gray-800'>Contact: {contact}</span>
      <span className='absolute bottom-20 right-4 text-sm font-bold text-gray-800'>{gender === 'male' ? 'M' : 'F'}</span>
    </div>
  )
}

export default CardSix;
