import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true); //For our side bar

  const [isClicked, setIsClicked] = useState(initialState); //For our nav bar
  
  const [screenSize, setScreenSize] = useState(undefined)

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true})
  } //For handling our navbar links

  return (
    <StateContext.Provider
      value={{ 
        activeMenu, 
        setActiveMenu, 
        isClicked, 
        setIsClicked, 
        handleClick, 
        screenSize, 
        setScreenSize
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
