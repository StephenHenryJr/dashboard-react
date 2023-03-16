import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { SlEnvolope } from "react-icons/sl";
import { useStateContext } from "../contexts/ContextProvider";
import { userProfileOptions, userInfo } from "../data/dummy";
import avatar from "../data/avatar.png";

const UserProfile = () => {
  const { currentColor, handleClose } = useStateContext();

  return (
    <div className="bg-white dark:bg-secondary-dark-bg  dark:text-white p-6 shadow-md rounded-xl h-auto w-96 absolute top-14 right-10 z-50">

      <div className="flex items-center">
        <h1>User Profile</h1>
        <button
          className="absolute top-6 right-4 text-gray-400 dark:text-white"
          onClick={() => handleClose("chat")}
        >
          <MdOutlineCancel />
        </button>
      </div>

      <div className="my-4 py-4 flex border-b-1">
        <div>
          <img className="rounded-full w-24 h-24" src={avatar} alt="user-profile" />
        </div>
        <div className="mx-4">
          <h1 className="text-sm">{userInfo[0].user}</h1>
          <p className="text-xs text-gray-400 my-0.5">{userInfo[0].title}</p>
          <p className="text-xs text-gray-400 flex items-center"><SlEnvolope style={{marginRight: "5px", fontSize:"20px"}}/>{userInfo[0].email}</p>
        </div>
      </div>

      <div>
        {userProfileOptions.map((message) => (
          <div className="my-4 py-4 flex border-b-1">
            <div className="relative">
              <div className="bg-gray-200 w-12 h-10 rounded-lg"></div>
            </div>

            <div className="ml-4">
              <h3 className="text-sm">{message.option}</h3>
              <p className="text-xs text-gray-400 my-0.5">
                {message.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <button
          className="p-2 mt-2 text-white rounded w-full"
          style={{ backgroundColor: currentColor }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
