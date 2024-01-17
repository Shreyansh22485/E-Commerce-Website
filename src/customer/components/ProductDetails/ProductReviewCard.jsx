import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div>
        <Grid container spacing={2} gap={3}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className='text-white' sx={{width:56,height:56,bgcolor:"#9155fd"}}>S</Avatar>
                </Box>
            </Grid>
            <Grid item xs={9}>
            <div className='space-y-2'>
                <div className='flex items-center space-x-2'>
                    <p className='text-sm font-semibold'>Sakshi</p>
                    <p className='text-sm text-gray-400'>2 days ago</p>
                </div>
                

            </div>
            <Rating value={4.5} name='half-rating' readOnly precision={.5}/>
            <div>
                    <p className='text-sm text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.</p>
                </div>


            </Grid>
        </Grid>
    </div>
  )
}

export default ProductReviewCard