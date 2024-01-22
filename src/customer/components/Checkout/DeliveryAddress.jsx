import React from "react";
import { Box, Button, Grid, TextField } from "@mui/material";
import AddressCard from "../AddressCard/AddressCard";

const DeliveryAddress = () => {
  const handleSubmit=(e)=>{
    e.preventDefault();
    const data =new FormData(e.currentTarget);
    const addressInfo={
      firstName:data.get('firstName'),
      lastName:data.get('lastName'),
      address:data.get('address'),
      city:data.get('city'),
      state:data.get('state'),
      pincode:data.get('pincode'),
      phone:data.get('phone'),
    }


  }
  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          xs={12}
          lg={5}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className=" p-5 py-7 border-b cursor-pointer ">
            <AddressCard />
            <Button
              sx={{ mt: 2, bgcolor: "" }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="given-name"
                  />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State"
                    fullWidth
                    autoComplete="given-name"
                  />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="pincode"
                    name="pincode"
                    label="Pincode"
                    fullWidth
                    autoComplete="shipping postal-code"
                  />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phone"
                    name="phone"
                    label="Phone"
                    fullWidth
                    autoComplete="given-name"
                  />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <Button
              sx={{py:1.5, mt: 2, bgcolor: "" }}
              size="large"
              variant="contained"
              type="submit"
            >
              Deliver Here
            </Button>
                  
                  

                
              </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddress;
