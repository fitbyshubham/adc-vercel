"use client"
import { createContext, useState } from "react"

export const Context = createContext(null)

const ContextProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState(null)

  return (
    <Context.Provider value={{ menuItems, setMenuItems }}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
