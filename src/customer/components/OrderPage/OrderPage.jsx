import { Grid } from "@mui/material";
import React from "react";
import OrderCard from "./OrderCard";

const orderStatus = [
  {
    name: "Shipped",
    value: "shipped",
  },
  {
    name: "Delivered",
    value: "delivered",
  },
  {
    name: "Cancelled",
    value: "cancelled",
  },
  {
    name: "Returned",
    value: "Returned",
  },
];

const OrderPage = () => {
  return (
    <div className="px-5 lg:px-20 ">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg ">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">ORDER STATUS</h1>
              <div>
                {orderStatus.map((item) => (
                  <div className="flex items-center space-x-2">
                    <input
                      defaultValue={item.value}
                      type="checkbox"
                      name=""
                      id=""
                      className="w-5 h-5 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label className="ml-3 text-gray-600" htmlFor={item.value}>
                        <span className="text-sm">{item.name}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={9}>
        <div className=" space-y-5">
            {[1,1,1,1,1].map((item )=> <OrderCard/>)}
        </div>


        </Grid>

      </Grid>
    </div>
  );
};

export default OrderPage;
