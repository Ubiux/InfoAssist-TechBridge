import Image from 'next/image'
import BackgroundImg from '../assets/home_background.png';
import { FaBook } from 'react-icons/fa';
import { GiSpeaker } from 'react-icons/gi';
import { AiFillMessage, AiFillInfoCircle } from 'react-icons/ai';
import Link from 'next/link';

export default function Home() {
  const links = [
    { title: 'Citeste mai multe informatii', href: 'https://mfe.gov.ro/', icon: <FaBook size={27} color='#1e40af' /> },
    { title: 'Comunica prin voce cu InfoAssist', href: '/voice', icon: <GiSpeaker size={27} color='#1e40af' /> },
    { title: 'Comunica prin text cu InfoAssist', href: '/text', icon: <AiFillMessage size={27} color='#1e40af' /> },
    { title: 'Despre InfoAssist', href: '/about', icon: <AiFillInfoCircle size={27} color='#1e40af' /> },
  ];

  return (
    <div>
      <Image
        className='border-b-4 border-blue-900' 
        alt={'background-img-with-robot'}
        src={ BackgroundImg } 
        width={ typeof window !== 'undefined' ? window.innerWidth : 0 }
      />
      <div>
        {
          links.map((link, index) => (
            <Link href={ link.href }>
              <div key={ index } className='
                flex flex-row items-center
                border-b-4 border-blue-900 bg-white
                h-20 text-lg text-blue-900 font-bold
                pl-4
              '>
                { link.icon }
                <p className='pl-2'>{ link.title }</p>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
