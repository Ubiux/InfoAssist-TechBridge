import React from 'react';
import { BsFillSendFill } from 'react-icons/bs';

export default function ChatBox ({ loading, submit }: { loading: boolean, submit: Function }) {
    const [input, setInput] = React.useState('' as string)

    function sendPrompt(e?: any) {
      if (e) { 
        if (e.key !== 'Enter') {
          return
        }
        e.preventDefault()
      }

      if(!loading && input !== '') {
        submit(input)
        setInput('')
      }
    }

    React.useEffect(() => {
      function handleEnter(e: any) {
        if(e.key === 'Enter') {
          sendPrompt()
        }
      }
    }, [input]);
    
    return (
      <div className='
        flex flex-row justify-center items-center align-center 
        w-screen px-4 absolute bottom-4
      '>
        <input type='text'
          placeholder='Scrie aici...'
          value={ input }
          disabled={ loading }
          onChange={ (e) => setInput(e.target.value) }
          onSubmit={ (e) => sendPrompt(e)}
          onKeyDown={ (e) => sendPrompt(e)}
          className='
            w-full h-10 px-4
            text-blue-800 text-lg
            focus:outline-none outline-none
            border-2 border-blue-800 rounded-lg
          ' 
        />
        <BsFillSendFill 
          className='w-10' 
          size={25}
          color='#1e40af' 
          onClick={() => sendPrompt()}
        />
      </div>
    );
  };