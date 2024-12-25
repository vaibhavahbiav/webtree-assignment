import React from 'react'

const CardSeven = ({ photo, fName, lName, gender, contact }) => {
    return (
        <div className="h-80 w-56 rounded-md bg-gradient-to-tr from-green-600 via-lime-500 to-amber-400 p-[2px]">
            <div className="bg-white flex h-full w-full flex-col items-center justify-center space-y-4 rounded-md">
                <div className='size-[100px] rounded-full bg-gradient-to-tr from-green-600 via-lime-500 to-amber-400 flex items-center justify-center'>
                    <img className="size-24 rounded-full" src={photo} alt={`${fName} ${lName}'s photo`} />
                </div>
                <span className="bg-gradient-to-r from-green-600 via-lime-500 to-amber-400 bg-clip-text text-2xl text-transparent font-medium">{fName} {lName}</span>
                <span className="bg-gradient-to-r from-green-600 via-lime-500 to-amber-400 bg-clip-text text-2xl text-transparent capitalize">{gender}</span>
                <span className="bg-gradient-to-r from-green-600 via-lime-500 to-amber-400 bg-clip-text text-2xl text-transparent">{contact}</span>
            </div>
        </div>
    )
}

export default CardSeven;
