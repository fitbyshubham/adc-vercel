"use client"
import React, { useState } from "react"
import { usePathname } from "next/navigation"

import Menu from "./Menu"
import NavLink from "./NavLink"
import useParentPage from "../hooks/useParentPage"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const fullPath = usePathname()
  const { name, path } = useParentPage(fullPath)

  const handleClick = () => setOpen(!open)

  const linkList = [
    { logo: true, path: "/" },
    { title: name.toUpperCase(), path },
    { title: open ? "CLOSE" : "MENU", path: "#", handleClick },
  ]

  return open ? (
    <Menu open={open} handleClose={handleClick} />
  ) : (
    <div className="flex justify-between items-center p-[30px] fixed w-full backdrop-blur-md z-50">
      {linkList.map((item) => (
        <NavLink
          key={item.title}
          logo={item.logo}
          title={item.title}
          fontSize={20}
          path={item.path}
          handleClick={item?.handleClick}
        />
      ))}
    </div>
  )
}

export default Navbar
