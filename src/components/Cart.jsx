import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../contexts/ContextProvider";
import { cartItems } from "../data/dummy";

const Counter = () => {
  return (
    <div className="">
      <div className="flex text-gray-400 text-lg">
        <button className="w-9 h-9 border border-gray-400  flex items-center justify-center rounded-l-md">
          +
        </button>
        <button className="w-9 h-9 border-y border-gray-400  flex items-center justify-center">0</button>
        <button className="w-9 h-9 border border-gray-400 flex items-center justify-center rounded-r-md">
          -
        </button>
      </div>
    </div>
  );
};

const Cart = () => {
  const { currentColor, handleClose } = useStateContext();

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right p-8 h-screen bg-white dark:[#484B52] dark:text-gray-500 w-400">

        <div className="flex justify-between items-center">
          <p className="font-semibold text-xl">Shopping Cart</p>
          <button
            type="button"
            onClick={() => handleClose("cart")}
            style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-sm hover:bg-gray-50"
          >
            <MdOutlineCancel />
          </button>
        </div>

        <div>
          {cartItems.map((cartItem) => (
            <div className="my-4 py-4 flex border-b-1">
              <div className="relative">
                <div className="bg-gray-200 w-24 h-20 rounded-lg"></div>
              </div>

              <div className="ml-4">
                <h3 className="text-md">{cartItem.item}</h3>
                <p className="text-sm text-gray-400 my-1">{cartItem.type}</p>
                <div className="flex items-center">
                  <p className="text-md font-semibold mr-2">{cartItem.price}</p>
                  <Counter />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="flex justify-between my-4">
            <p className="text-gray-400">Sub Total</p>
            <p>$452.97</p>
          </div>
          <div className="flex justify-between my-4">
            <p className="text-gray-400">Total</p>
            <p>$529.97</p>
          </div>
        </div>
        
        <div>
          <button
            className="p-2 mt-2 text-white rounded w-full"
            style={{ backgroundColor: currentColor }}
          >
            Place order
          </button>
        </div>


      </div>
    </div>
  );
};

export default Cart;
