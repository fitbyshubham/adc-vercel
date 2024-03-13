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
          <div
            className={`lg:flex hidden w-full justify-center items-center relative`}
          >
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
            <div className="flex absolute right-0  gap-x-[26px]">
              <button className="outline-none text-xs uppercase font-medium">
                FR
              </button>
              <button className="outline-none flex gap-x-[10px] items-center">
                <p className="text-xs uppercase font-medium">Login</p>
                <div className="h-[30px] w-[30px] rounded-full bg-black flex items-center justify-center">
                  <svg
                    width="10"
                    height="8"
                    viewBox="0 0 10 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.84237 3.49805C9.82647 3.44123 9.46994 3.07337 8.15193 1.75381C6.96831 0.568807 6.45582 0.0690185 6.39305 0.0385468C6.20117 -0.0546581 5.94665 0.0274358 5.83919 0.217199C5.78477 0.313285 5.77608 0.49916 5.82121 0.602776C5.83773 0.640758 6.3905 1.20857 7.1175 1.93435L8.38496 3.19972L4.33338 3.21L0.28181 3.22029L0.192596 3.28292C-0.0630075 3.4624 -0.0630075 3.82176 0.192596 4.00124L0.28181 4.06387L4.33338 4.07415L8.38496 4.08444L7.1175 5.34981C6.3905 6.07559 5.83773 6.6434 5.82121 6.68138C5.77608 6.785 5.78477 6.97087 5.83919 7.06696C5.94665 7.25672 6.20117 7.33882 6.39305 7.24561C6.45584 7.21512 6.96796 6.71562 8.15162 5.53035C9.59119 4.08885 9.82468 3.84676 9.84381 3.77582C9.87021 3.67794 9.8698 3.59599 9.84237 3.49805Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </button>
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
        <div className="flex gap-x-[26px] lg:hidden self-center">
          <button className="outline-none text-base uppercase font-medium">
            FR
          </button>
          <button className="outline-none flex gap-x-[10px] items-center">
            <p className="text-base uppercase font-medium">Login</p>
            <div className="h-[30px] w-[30px] rounded-full bg-black flex items-center justify-center">
              <svg
                width="10"
                height="8"
                viewBox="0 0 10 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.84237 3.49805C9.82647 3.44123 9.46994 3.07337 8.15193 1.75381C6.96831 0.568807 6.45582 0.0690185 6.39305 0.0385468C6.20117 -0.0546581 5.94665 0.0274358 5.83919 0.217199C5.78477 0.313285 5.77608 0.49916 5.82121 0.602776C5.83773 0.640758 6.3905 1.20857 7.1175 1.93435L8.38496 3.19972L4.33338 3.21L0.28181 3.22029L0.192596 3.28292C-0.0630075 3.4624 -0.0630075 3.82176 0.192596 4.00124L0.28181 4.06387L4.33338 4.07415L8.38496 4.08444L7.1175 5.34981C6.3905 6.07559 5.83773 6.6434 5.82121 6.68138C5.77608 6.785 5.78477 6.97087 5.83919 7.06696C5.94665 7.25672 6.20117 7.33882 6.39305 7.24561C6.45584 7.21512 6.96796 6.71562 8.15162 5.53035C9.59119 4.08885 9.82468 3.84676 9.84381 3.77582C9.87021 3.67794 9.8698 3.59599 9.84237 3.49805Z"
                  fill="white"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Menu
