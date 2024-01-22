import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/Pages/HomePage/HomePage'
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import Cart from '../customer/components/Cart/Cart'
import Checkout from '../customer/components/Checkout/Checkout'
import OrderPage from '../customer/components/OrderPage/OrderPage'
import OrderDetails from '../customer/components/OrderPage/OrderDetails'
import Navigation from '../customer/components/Navigation/Navigation'
import Footer from '../customer/components/Footer/Footer'


const CustomerRoute = () => {
  return (
    <div>
      <div>
      <div>
      <Navigation />

      </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account/order" element={<OrderPage />} />
          <Route path="/account/order/:id" element={<OrderDetails />} />  
        </Routes>
        <div>
      <Footer />

        </div>
      </div>
    </div>
  )
}

export default CustomerRoute