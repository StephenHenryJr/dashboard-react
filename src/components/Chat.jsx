import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useStateContext } from "../contexts/ContextProvider";
import { chatMessages } from "../data/dummy";

const Chat = () => {
  const { currentColor, handleClose } = useStateContext();

  return (
    <div className="bg-white p-6 shadow-md rounded-xl h-auto w-96 absolute top-14 right-40 z-50 dark:bg-secondary-dark-bg  dark:text-white">
      <div className="flex items-center mb-6">
        <h1>Messages</h1>
        <button
          className="bg-red-300 rounded ml-4 py-0.5 px-2 text-white text-xs"
          style={{ backgroundColor: currentColor }}
        >
          5 new
        </button>
        <button
          className="absolute top-6 right-4 text-gray-400 dark:text-white"
          onClick={() => handleClose("chat")}
        >
          <MdOutlineCancel />
        </button>
      </div>

      <div>
        {chatMessages.map((message) => (
          <div className="my-4 py-4 flex border-b-1">
            <div className="relative">
              <div className="bg-gray-200 w-12 h-12 rounded-full"></div>
              <span
                className="absolute inline-flex rounded-full h-2 w-2 right-1 top-1"
                style={{ background: currentColor }}
              />
            </div>

            <div className="ml-4">
              <h3 className="text-sm">{message.notification}</h3>
              <p className="text-xs text-gray-400 my-0.5">{message.action}</p>
              <p className="text-xs text-gray-400">{message.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <button
          className="p-2 mt-2 text-white rounded w-full"
          style={{ backgroundColor: currentColor }}
        >
          See all messages
        </button>
      </div>
    </div>
  );
};

export default Chat;
