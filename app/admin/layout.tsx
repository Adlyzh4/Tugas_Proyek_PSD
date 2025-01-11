"use client"
import Login from "@/src/admin-panel/Login"
import { useAppSelector } from '@/src/redux/hooks'
import { useSession } from 'next-auth/react'
import React from 'react'
import "../globals.css"
import Loader from "@/src/admin-panel/Loader"
import Sidebar from "@/src/admin-panel/Sidebar"

const layout = ({children}: {children : React.ReactNode}) => {
    const isLoading = useAppSelector(store => store.LoadingReducer)
    const {data: session} = useSession()

    if(!session?.user){
        return <Login/>
    }

  return (
    <div className="flex">
      <Sidebar/>
      <div className="w-full h-full">
        {/* <navbar/ > */}
        <div className="bg-gray-200 p-4 h-[calc(100vh-64px)]">{children}</div>
      </div>
      {isLoading && <Loader/>}
    </div>
  )
}

export default layout