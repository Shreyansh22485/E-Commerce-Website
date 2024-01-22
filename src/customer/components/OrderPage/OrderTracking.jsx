import { Label } from '@mui/icons-material'
import { Step, StepLabel, Stepper } from '@mui/material'
import React from 'react'

const steps=[
    'Order Placed',
    'Order Confirmed',
    'Order Packed',
    'Order Shipped',
    'Order Out for Delivery',
    'Order Delivered'
    
]

const OrderTracking = (activeStep) => {
  return (
    <div className='w-full'>
    <Stepper activeStep={activeStep} alternativeLabel>
    {steps.map((Label)=><Step>
    <StepLabel sx={{color:"#9155FD",fontSize:"44px"}}>{Label}</StepLabel>

    </Step>)}
    </Stepper>

    </div>
  )
}

export default OrderTracking