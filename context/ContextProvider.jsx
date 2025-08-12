'use client'
import { createContext, useState } from "react";

export const StateContext = createContext()

function ContextProvider({children}) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
  return <StateContext.Provider value={{
    data:data,
    setData: setData,
    loading: loading,
    setLoading: setLoading
  }}>
    {children}
    </StateContext.Provider>
}

export default ContextProvider
