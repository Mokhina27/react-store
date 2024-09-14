import React from 'react'
import Products from '../components/Products/Products'
import Navbar from '../components/Navbar/Navbar'

const Shop = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
        <Products/>
      </div>
    </>
  )
}

export default Shop