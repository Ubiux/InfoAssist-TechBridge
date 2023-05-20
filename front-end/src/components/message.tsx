export interface IMessageProps {
  from: string;
  text: string;
}

export default function Message({ from, text }: IMessageProps) {
  return (
    <div className={`flex w-full my-3
    ${from === 'bot' ? 'justify-start' : 'justify-end'}
    `}>
      <div className={`
        min-message-width
        max-message-width
        px-4 py-2
        shadow-md
        ${from === 'bot' ? 
          'rounded-tr-lg rounded-bl-lg rounded-br-lg' : 
          'rounded-tl-lg rounded-bl-lg rounded-br-lg'
        }
        ${from === 'bot' ? 'bg-blue-500' : 'bg-white'}
      `}>
        <p className={`
          ${from === 'bot' ? 'text-white' : 'text-blue-800'}
        `}>
          { text }
        </p>
      </div>
    </div>
  )
}