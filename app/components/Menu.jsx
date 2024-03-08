import React from "react"
import Text from "./Text"
import NavLink from "./NavLink"
import Link from "next/link"

const Menu = ({ open, handleClose }) => {
  const menuLinkList = [
    { title: "News & EVENTS", path: "#" },
    { title: "BECOMe A MEMBER", path: "#" },
    { title: "PARTNER WITH US", path: "#" },
    { title: "Shop", path: "#" },
    { title: "CONTACT", path: "#" },
  ]

  const twClass = open ? "bg-white fixed w-full z-50" : "hidden"
  return (
    <div className={twClass}>
      <div className="flex flex-col gap-4 p-4 pb-10">
        <div className="flex justify-between gap-x-8">
          <NavLink title={"ADC"} path={""} />

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {menuLinkList.map((item) => (
              <NavLink
                key={item.title}
                title={item.title.toUpperCase()}
                fontSize={12}
                path={item.path}
              />
            ))}
          </div>
          <NavLink
            title={open ? "CLOSE" : "MENU"}
            path={""}
            handleClick={handleClose}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Text
            twClassName={"md:text-[54px] text-[40px]"}
            onClick={handleClose}
          >
            <Link href={"/insights"}>INSIGHTS</Link>
          </Text>
          <Text
            twClassName={"md:text-[54px] text-[40px]"}
            onClick={handleClose}
          >
            <Link href={"/learning"}>LEARNING</Link>
          </Text>
          <Text
            twClassName={"md:text-[54px] text-[40px]"}
            onClick={handleClose}
          >
            <Link href={"/creative-days"}>Creative Days</Link>
          </Text>
          <Text
            twClassName={"md:text-[54px] text-[40px]"}
            onClick={handleClose}
          >
            <Link href={"/awards"}>ADC AWARDs</Link>
          </Text>
          <Text
            twClassName={"md:text-[54px] text-[40px]"}
            onClick={handleClose}
          >
            <Link href={"/people"}>PEOPLE</Link>
          </Text>
        </div>
      </div>
    </div>
  )
}

export default Menu
