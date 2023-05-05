import React from 'react'

export default function Input({type, placeholder, name}) {
    if (name === "message") {
        return <textarea name={name} id={name} placeholder={placeholder} rows="4" className='border border-gray-300 placeholder:text-xs placeholder:text-gray-500 placeholder:font-light placeholder:pl-2 mb-2 rounded-md w-full pt-2'/>
    }
  return (
    <input type={type} name={name} id={name} placeholder={placeholder} className='border border-gray-300 placeholder:text-xs py-2 placeholder:text-gray-500 placeholder:font-light placeholder:pl-2 mb-2 rounded-md w-full'/>
  )
}
