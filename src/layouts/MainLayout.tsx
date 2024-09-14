import React, { FC, ReactNode } from 'react'
import Navbar from '../components/Navbar/Navbar'

interface IProps {
    children: ReactNode
}

const MainLayout:FC<IProps> = ({ children }) => {
  return (
    <>
        <div className="main">
            <Navbar/>
        </div>
    </>
  )
}

export default MainLayout