import { FC } from "react"
import Navbar from "../components/Navbar/Navbar"
import ProductItem from "../components/ProductItem/ProductItem"


const Product:FC = () => {
  return (
    <>
      <Navbar/>
      <ProductItem/>
    </>
  )
}

export default Product