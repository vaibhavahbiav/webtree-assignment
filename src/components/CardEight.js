import React from 'react'

const  CardEight = ({photo, fName, lName, gender, contact}) => {
    return (
        <div className="relative h-20 w-80 rounded-r-2xl rounded-bl-2xl bg-white before:absolute before:-top-[40px] before:left-0 before:size-[40px] before:rounded-bl-2xl before:bg-transparent before:shadow-[0px_20px_#fff] shadow-lg">
            <div className="flex space-x-8 text-gray-800 font-light absolute top-1/2 -translate-y-1/2 left-10">
                <img className="rounded-full size-12" src={photo} alt={`${fName} ${lName}'s photo`} />
                <div className="flex flex-col items-baseline space-x-2">
                    <span className='capitalize'>{fName}</span>
                    <span>{contact}</span>
                </div>
                <span className={`${gender==='male'?' text-blue-500': 'text-pink-500'}`}>{gender === 'male' ? 'M' : 'F'}</span>
            </div>
        </div>
    )
}

export default CardEight;
