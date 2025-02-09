import React from 'react'
import SideBar from '../components/SideBar'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const Home = () => {
    return (
        <div className="w-full min-h-screen bg-green flex">
            <SideBar />
            <div className="flex flex-col flex-grow h-[100px]">
                <Header />
                <div className="flex-grow z-[-1]">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Home
