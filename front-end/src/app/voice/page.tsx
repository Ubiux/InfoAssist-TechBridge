import React from 'react';
import { BsFillMicFill } from 'react-icons/bs';

export default function Voice() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <BsFillMicFill size={120} color='#1e40af' className='
        p-5 mt-52
        rounded-full
        shadow-xl
      '/>
      <p className='text-2xl text-blue-800 mt-5'>
        În curând...
      </p>
    </div>
  )
}
