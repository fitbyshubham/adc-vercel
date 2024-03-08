import React from "react"
import Text from "./Text"
import NavLink from "./NavLink"
import Link from "next/link"
import Loading from "./Loading"

const Menu = ({ open, handleClose, menuItems }) => {
  const twClass = open ? "bg-white fixed w-full z-50" : "hidden"

  const menuLinkList = [
    { title: "News & EVENTS", path: "#" },
    { title: "BECOMe A MEMBER", path: "#" },
    { title: "PARTNER WITH US", path: "#" },
    { title: "Shop", path: "#" },
    { title: "CONTACT", path: "#" },
  ]

  return (
    <div className={twClass}>
      <div className="flex justify-between p-4 pb-10">
        <NavLink title={"ADC"} path={""} />
        <div className={`flex items-center gap-20`}>
          <div>
            <div className="flex gap-4">
              {menuLinkList.map((item) => (
                <NavLink
                  key={item.title}
                  title={item.title.toUpperCase()}
                  fontSize={12}
                  path={item.path}
                />
              ))}
            </div>
            <div className={`text-center pt-10 uppercase`}>
              <Text twClassName={"text-[54px]"} onClick={handleClose}>
                <Link href={"/insights"}>{menuItems?.page1Name}</Link>
              </Text>
              <Text twClassName={"text-[54px]"} onClick={handleClose}>
                <Link href={"/learning"}>{menuItems?.page2Name}</Link>
              </Text>
              <Text twClassName={"text-[54px]"} onClick={handleClose}>
                <Link href={"/creative-days"}>{menuItems?.page3Name}</Link>
              </Text>
              <Text twClassName={"text-[54px]"} onClick={handleClose}>
                <Link href={"/awards"}>{menuItems?.page4Name}</Link>
              </Text>
              <Text twClassName={"text-[54px]"} onClick={handleClose}>
                <Link href={"/people"}>{menuItems?.page5Name}</Link>
              </Text>
            </div>
            {!menuItems ? (
              <div className="flex justify-center">
                <Loading />
              </div>
            ) : null}
          </div>
        </div>
        <NavLink
          title={open ? "CLOSE" : "MENU"}
          path={""}
          handleClick={handleClose}
        />
      </div>
    </div>
  )
}

export default Menu
