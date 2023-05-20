"use client"
import ChatBox from '@/components/chatbox';
import Message, { IMessageProps } from '@/components/message';
import React from 'react';
import promptMessage from '../../services/promptMessage';
import { ThreeDots } from 'react-loader-spinner';

export default function Text() {
  const [chat, setChat] = React.useState<any>([{from: 'bot', text: 'Bună, eu sunt botul tău personal. Îmi poți pune orice întrebare, încerc să răspund la cât mai multe.'}]);

  const [loading, setLoading] = React.useState(false)

  function submit(input: string) {
    setChat((prevChat: IMessageProps[]) => [...prevChat, { from: 'me', text: input }]);
    setLoading(true);

    promptMessage(input).then((response) => {
      if(response.success) {
        setChat((prevChat: IMessageProps[]) => [...prevChat, { from: 'bot', text: response.message }]);
      } else {
        setChat((prevChat: IMessageProps[]) => [...prevChat, { from: 'bot', text: 'Sorry, I didn\'t understand that' }]);
      }
    }).finally(() => {
      setLoading(false);
    })
  }

  return (
    <div className='
      bg-white
      flex flex-col justify-between
      px-2 py-4 items-center
      h-5/6 bg-gray-100
    '>
      <div className='h-chatList w-full overflow-x-scroll flex flex-col justify-start'>
        { chat.map((message: IMessageProps, index: number) => {
          return (
            <Message key={index} from={message.from} text={message.text} />
          )
        }) 
        }

      { loading && <div className='ml-2'>
        <ThreeDots 
          height="40" 
          width="40"
          color='#3b82f6'
          visible={true}
          />
        </div>
      }
      </div>
      <ChatBox loading={ loading } submit = {(message: string) => submit(message)} />
    </div>
  );
}