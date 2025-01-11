"use client"
import { store } from "@/src/redux/store"
import React from 'react'
import { Provider } from "react-redux"
import "../app/globals.css"

const App = ({children}: {children: React.ReactNode}) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default App