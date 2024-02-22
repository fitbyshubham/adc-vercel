import React from 'react'
import Text from './Text'
import NavLink from './NavLink'
import Link from 'next/link'

const Menu = ({ open, handleClose }) => {
  const menuLinkList = [
    { title: 'News & EVENTS', path: '#' },
    { title: 'BECOMe A MEMBER', path: '#' },
    { title: 'PARTNER WITH US', path: '#' },
    { title: 'Shop', path: '#' },
    { title: 'CONTACT', path: '#' },
  ]

  const twClass = open ? 'bg-white fixed w-full z-50' : 'hidden'
  return (
    <div className={twClass}>
      <div className="flex justify-between p-4 pb-10">
        <NavLink title={'ADC'} path={''} />
        <div className="flex items-center gap-20">
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
            <div className="text-center pt-10">
              <Text twClassName={'text-[54px]'} onClick={handleClose}>
                <Link href={'/insights'}>INSIGHTS</Link>
              </Text>
              <Text twClassName={'text-[54px]'} onClick={handleClose}>
                <Link href={'/learning'}>LEARNING</Link>
              </Text>
              <Text twClassName={'text-[54px]'} onClick={handleClose}>
                <Link href={'/creative-days'}>Creative Days</Link>
              </Text>
              <Text twClassName={'text-[54px]'} onClick={handleClose}>
                <Link href={'/awards'}>ADC AWARDs</Link>
              </Text>
              <Text twClassName={'text-[54px]'} onClick={handleClose}>
                <Link href={'/people'}>PEOPLE</Link>
              </Text>
            </div>
          </div>
          {/* <div className="flex gap-10">
            <div>FR</div>
            <div>LOGIN</div>
          </div> */}
        </div>
        <div className="flex">
          <NavLink
            title={open ? 'CLOSE' : 'MENU'}
            path={''}
            handleClick={handleClose}
          />
        </div>
      </div>
    </div>
  )
}

export default Menu
