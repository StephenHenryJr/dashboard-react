import React from 'react'

import { chatMessages } from "../data/dummy";

const Chat = () => {
  return (
    <div className='bg-white p-6 shadow-md rounded-xl h-auto w-96 absolute top-14 right-40'>
      <div className='flex items-center mb-6'>
        <h1>Messages</h1>
        <button className='bg-red-300 rounded ml-4 py-0.5 px-2 text-white text-sm'>5 new</button>
      </div>

    <div>
      {
        chatMessages.map((message) => (
          <div className='my-2 py-2 flex border-b-1'>
            <div className='bg-gray-200 w-12 h-12 rounded-full'>
            </div>
            <div className='ml-4'>
              <h3 className='text-sm'>{message.notification}</h3>
              <p className='text-xs text-gray-400 my-0.5'>{message.action}</p>
              <p className='text-xs text-gray-400'>{message.time}</p>
            </div>
          </div>
        ))
      }
    </div>

      <div>
        <button className='p-2 mt-2 bg-red-300 text-white rounded w-full'>See all messages</button>
      </div>
    </div>
  )
}

export default Chat