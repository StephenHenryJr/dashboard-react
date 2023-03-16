import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../contexts/ContextProvider";

const Cart = () => {
  const { currentColor, handleClose } = useStateContext();

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen bg-white dark:[#484B52] dark:text-gray-500 w-400">
        
      </div>
    </div>
  );
};

export default Cart;
