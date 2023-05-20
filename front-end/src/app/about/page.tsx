// create an about page
import React from 'react';

export default function About() {
  return (
    <div className='bg-white text-center'>
      <h2 className='
        py-5
        text-blue-800
        font-bold text-lg
      '>
        Despre InfoAssist
      </h2>
      <div className='
        bg-blue-800 shadow-lg
        align-center justify-center
        py-3 px-4 mb-5
      '>
        <h2 className='
          text-center
          font-bold text-2xl text-white
        '>
          Ce ofera InfoAssist?
        </h2>
      </div>
      <p className='
        text-justify
        px-4 my-7
        text-gray-700 text-lg
      '>
        Oferă o modalitate de a accesa informaţii oficiale foarte repede, fiind personalizate pentru utilizator, în timp ce răspunsul imediat asigură un serviciu accesibil pentru cetăţeni.
      </p>
      <div className='
        bg-blue-800 shadow-lg
        align-center justify-center
        py-3 px-4 mb-5
      '>
        <h2 className='
          text-center
          font-bold text-2xl text-white
        '>
          Care este scopul InfoAssist?
        </h2>
      </div>
      <p className='
        text-justify
        px-4 my-7
        text-gray-700 text-lg
      '>
        Scopul este de a facilita accesul la informații oficiale.
      </p>
      <div className='
        bg-blue-800 shadow-lg
        align-center justify-center
        py-3 px-4 mb-5
      '>
        <h2 className='
          text-center
          font-bold text-2xl text-white
        '>
          Cum funcționează InfoAssist?
        </h2>
      </div>
      <p className='
        text-justify
        px-4 my-7
        text-gray-700 text-lg
      '>
        Scopul este de a facilita accesul la informații oficiale.
      </p>
    </div>
  );
}