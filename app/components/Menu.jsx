import React from 'react'
import Text from './Text'
import NavLink from './NavLink'

const Menu = ({ open, handleClose }) => {
  const linkList = [
    { title: 'ADC', path: '#' },
    { title: open ? 'CLOSE' : 'MENU', path: '#', handleClick: handleClose },
  ]

  const twClass = open ? 'bg-white fixed w-full z-10' : 'hidden'
  return (
    <div className={twClass}>
      <div className="flex justify-between p-4 pb-10">
        {linkList.map((item) => (
          <NavLink
            key={item.title}
            title={item.title}
            path={item.path}
            handleClick={item?.handleClick}
          />
        ))}
      </div>
      <div className="text-center">
        <Text twClassName={'text-[54px]'}>INSIGHTS</Text>
        <Text twClassName={'text-[54px]'}>LEARNING</Text>
        <Text twClassName={'text-[54px]'}>Creative Days</Text>
        <Text twClassName={'text-[54px]'}>ADC AWARDs</Text>
        <Text twClassName={'text-[54px]'}>PEOPLE</Text>
      </div>
    </div>
  )
}

export default Menu
