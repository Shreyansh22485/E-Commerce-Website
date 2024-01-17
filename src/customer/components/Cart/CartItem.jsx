import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/h/y/g/34-jeans-bt008-laheja-original-imagqqbsfgmdhcvn.jpeg?q=70"
            alt=""
            className="object-cover w-full h-full rounded-md object-top"
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">
            Apple MacBook Air M1 Max 2023 - Space Gray - 16
          </p>

          <p className="text-sm text-gray-500 mt-2">Size l , white</p>

          <p className="text-sm text-gray-500 mt-2">Seller: Apple</p>

          <div className="flex space-x-5 items-center text-lg lg:text-lg text-gray-900 pt-0 lg:pt-6">
            <p className="font-semibold text-gray-900">
              {/* ₹{product.price} */} 1999
            </p>
            <p className="text-sm lg:text-lg text-gray-400 line-through">
              {/* ₹{product.price} */}211
            </p>
            <p className="text-sm lg:text-lg text-green-600 font-semibold">
              {/* {product.discountPersent}% off */}5
            </p>
          </div>
        </div>
      </div>{" "}
      <div>
        <div className="flex items-center  lg:space-x-10 pt-4">
          <div className="flex items-center space-x-2">
            <IconButton color="">
              <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>
            </IconButton>
            <span className="py-1 px-7 border rounded-sm">3</span>
              <IconButton sx={{color:"RGB(145 85 253)"}}>
                <AddCircleOutlineIcon></AddCircleOutlineIcon>
              </IconButton>
            
          </div>
          <div className="">
            <Button sx={{color:"red"}}>Remove</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
