import React from "react"
import Text from "./Text"
import NavLink from "./NavLink"
import Link from "next/link"
import Loading from "./Loading"

const Menu = ({ open, handleClose, menuItems, lang }) => {
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
      <div className="flex flex-col gap-[40px] p-[30px] pb-10">
        <div className="flex justify-between sm:items-center gap-x-8">
          <NavLink title={"ADC"} path={""} />
          <div className={`lg:flex hidden`}>
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

            {!menuItems ? (
              <div className="flex justify-center">
                <Loading />
              </div>
            ) : null}
          </div>
          <NavLink
            title={open ? "CLOSE" : "MENU"}
            path={""}
            handleClick={handleClose}
          />
        </div>
        <div className={`flex lg:hidden w-full justify-center`}>
          <div className="flex flex-col justify-center items-center gap-y-4">
            {menuLinkList.map((item) => (
              <NavLink
                key={item.title}
                title={item.title.toUpperCase()}
                fontSize={16}
                path={item.path}
              />
            ))}
          </div>

          {!menuItems ? (
            <div className="flex justify-center">
              <Loading />
            </div>
          ) : null}
        </div>
        <div className={`text-center uppercase`}>
          <Text
            twClassName={"lg:text-[55px] text-[24px] font-semibold"}
            onClick={handleClose}
          >
            <Link href={`/${lang}/insights`}>{menuItems?.page1Name}</Link>
          </Text>
          <Text
            twClassName={"lg:text-[55px] text-[24px] font-semibold"}
            onClick={handleClose}
          >
            <Link href={`/${lang}/learning`}>{menuItems?.page2Name}</Link>
          </Text>
          <Text
            twClassName={"lg:text-[55px] text-[24px] font-semibold"}
            onClick={handleClose}
          >
            <Link href={`/${lang}/creative-days`}>{menuItems?.page3Name}</Link>
          </Text>
          <Text
            twClassName={"lg:text-[55px] text-[24px] font-semibold"}
            onClick={handleClose}
          >
            <Link href={`/${lang}/awards`}>{menuItems?.page4Name}</Link>
          </Text>
          <Text
            twClassName={"lg:text-[55px] text-[24px] font-semibold"}
            onClick={handleClose}
          >
            <Link href={`/${lang}/people`}>{menuItems?.page5Name}</Link>
          </Text>
        </div>
      </div>
    </div>
  )
}

export default Menu
