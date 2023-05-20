// create a header component
import React from 'react';
import { FaBook } from 'react-icons/fa';
import { GiSpeaker } from 'react-icons/gi';
import { AiFillMessage, AiFillInfoCircle } from 'react-icons/ai';
import Link from 'next/link';

const Header = () => {

  return (
    <header className='
      flex justify-between
      px-4 py-6 items-center
      shadow-lg mb-4
    '>
      <h1 className='
        text-2xl
        font-bold
        text-blue-800
      '>InfoAssist</h1>

      <div className='flex flex-row space-x-2'>
        <Link href='https://mfe.gov.ro/'>
          <FaBook size={27} color='#1e40af' />
        </Link>
        <Link href='/voice'>
          <GiSpeaker size={27} color='#1e40af' />
        </Link>
        <Link href='/text'>
          <AiFillMessage size={27} color='#1e40af' />
        </Link>
        <Link href='/about'>
          <AiFillInfoCircle size={27} color='#1e40af' />
        </Link>
      </div>

    </header>
  );
};  


export default Header;