import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import CartItem from '../Cart/CartItem'

const OrderSummary = () => {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
        <AddressCard></AddressCard>
        
      </div>
      <div>
      <div className="lg:grid grid-cols-3 relative  ">
        <div className="col-span-2 ">
          {[1,1,1,1].map((item)=><CartItem />)}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <div className="p-5">
              <p className="uppercase font-semibold text-lg">Price Details</p>
              <div className="flex justify-between mt-3">
                <p className="text-gray-500">Price (1 item)</p>
                <p className="text-gray-500">₹1999</p>
              </div>
              <div className="flex justify-between mt-3">
                <p className="text-gray-500">Discount</p>
                <p className="text-gray-500">₹1999</p>
              </div>
              <div className="flex justify-between mt-3">
                <p className="text-gray-500">Delivery Charges</p>
                <p className="text-gray-500">₹1999</p>
              </div>
              <div className="flex justify-between mt-3 font-bold">
                <p className="text-gray-500">Total Amount</p>
                <p className="text-gray-500">₹1999</p>
              </div>
              <div className="mt-5">
                <button className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-md">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default OrderSummary