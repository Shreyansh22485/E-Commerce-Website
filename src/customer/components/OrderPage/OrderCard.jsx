import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate=useNavigate()
  return (
    <div onClick={
      ()=>navigate(`/account/order/${5}`)
    } className="p-5 shadow-lg hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/i/v/x/xxl-br-ad-kt-105-adwyn-peter-original-imagj4zyd2q7t6cg.jpeg?q=70"
            />
            <div className="ml-5 space-y-2">
              <p className="font-semibold">
                Apple MacBook Air M1 Max 2023 - Space Gray - 16
              </p>
              <p className="text-sm text-gray-500 mt-2">Size l , white</p>
              <p className="text-sm text-gray-500 mt-2">Seller: Apple</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p className="text-sm text-gray-500 mt-2">₹1999</p>
        </Grid>
        <Grid item xs={4}>
        {true && <div><p>
            <AdjustIcon sx={{color:"green", width:"15px", height:"15px"}} className="text-green-600 mr-2 text-sm"></AdjustIcon> 
            <span>Delivered</span>
        </p>
        <p className="text-sm text-gray-500">Your item has been delivered</p>

        </div>}
        {false && <p>
        <span>
            Expected Delivery 
        </span>
            
        </p>}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
