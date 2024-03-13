"use client"
import React, { useState, useEffect, useContext } from "react"
import { usePathname } from "next/navigation"
import Menu from "./Menu"
import NavLink from "./NavLink"
import useParentPage from "../hooks/useParentPage"
import Api from "../api"
import { Context } from "../context"

const Navbar = ({ lang }) => {
  const [open, setOpen] = useState(false)
  const { menuItems, setMenuItems } = useContext(Context)
  const fullPath = usePathname()
  const { name, path } = useParentPage(fullPath, menuItems)

  const handleClick = () => setOpen(!open)

  useEffect(() => {
    Api.getMenuContent()
      .then((res) => {
        setMenuItems(res.data.attributes)
      })
      .catch(console.log)
  }, [])

  const linkList = [
    { logo: true, path: "/" },
    { title: name.toUpperCase(), path },
    { title: open ? "CLOSE" : "MENU", path: "#", handleClick },
  ]

  return open ? (
    <Menu
      open={open}
      handleClose={handleClick}
      menuItems={menuItems}
      lang={lang}
    />
  ) : (
    <div className="flex justify-between items-center p-[30px] fixed w-full backdrop-blur-md z-50">
      {linkList.map((item, idx) => (
        <NavLink
          key={idx}
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
