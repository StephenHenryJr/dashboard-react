import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../contexts/ContextProvider";

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
          <button
            className="p-2 mt-2 text-white rounded w-full"
            style={{ backgroundColor: currentColor }}
          >
            Place Order
          </button>
        </div>

      </div>
    </div>
  );
};

export default Cart;
