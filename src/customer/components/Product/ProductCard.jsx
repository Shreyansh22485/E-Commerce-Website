import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

const ProductCard = ({product}) => {
  const navigate=useNavigate();
    return (
    <div onClick={()=>
      // navigate(`/product/${product.id}`
      navigate(`/product/${5}`)
    } className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={product.imageUrl}
        />
      </div>
      <div className="textPart bg-white p-3">
        <p className="font-bold text-lg">{product.brand}</p>
        <p className="text-sm">{product.title}</p>

        <div className="priceAndRating flex justify-between items-center">
          <div>
            <div className="flex items-center space-x-2">
              <p className="text-sm text-gray-400 line-through"> ₹{product.price}</p>
              <p className="text-green-600 font-semibold">{product.discountPersent}% off</p>
            </div>

            <p className="text-lg font-bold">₹{product.discountedPrice}</p>
          </div>

          <div className="flex items-center">
            <p className="text-sm">4.5</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-yellow-500 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 1l2.598 6.776h7.902l-6.386 4.92 2.598 6.776L10 13.552 3.288 19.472l2.598-6.776L0 7.776h7.902L10 1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
