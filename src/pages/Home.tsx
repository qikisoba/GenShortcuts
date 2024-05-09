import Header from '../components/Header'
import React from 'react'
import { Outlet } from "react-router-dom"
const Home: React.FC = () => {


    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
export default Home