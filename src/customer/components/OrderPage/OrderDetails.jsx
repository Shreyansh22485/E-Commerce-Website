import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracking from "./OrderTracking";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { StarIcon } from "@heroicons/react/24/outline";
import { StarBorder } from "@mui/icons-material";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard></AddressCard>
      </div>
      <div className="py-20">
        <OrderTracking activeStep={3} />
      </div>
      <Grid className=" space-y-5" container>
      {[1,1,1,1,1].map((item)=><Grid
          item
          container
          className=" shadow-xl rounded-md p-5"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className="
            flex items-center 
            
            ">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/i/v/x/xxl-br-ad-kt-105-adwyn-peter-original-imagj4zyd2q7t6cg.jpeg?q=70"
              />
              <div className=" space-y-2 ml-5">
                <p className="font-semibold">
                  Apple MacBook Air M1 Max 2023 - Space Gray - 16
                </p>
                <p className="text-sm text-gray-500 mt-2"> <span>white </span> <span>Size l ,</span></p>
                <p className="text-sm text-gray-500 mt-2">Seller: Apple</p>
 <p className="text-sm text-gray-900 mt-2">₹1999</p>
              </div>
            </div>
          </Grid>
          <Grid item>
           <Box sx={{color:deepPurple[500]}} >
           <StarBorderIcon sx={{fontSize:"2rem"}} className="px-2 text-2xl"/>
            <span>
              Rate & Review Product
            </span>
           </Box>
          </Grid>
        </Grid>)}
        
      </Grid>
    </div>
  );
};

export default OrderDetails;
