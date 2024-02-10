import React from 'react'

const NavLink = ({ title, path }) => {
  return (
    <a className="font-semibold text-[20px]" href={path}>
      {title}
    </a>
  )
}
const Navbar = () => {
  const linkList = [
    { title: 'ADC', path: '#' },
    { title: 'START', path: '#' },
    { title: 'MENU', path: '#' },
  ]

  return (
    <div className="flex justify-between p-4 fixed w-full backdrop-blur-md">
      {linkList.map((item) => (
        <NavLink key={item.title} title={item.title} path={item.path} />
      ))}
    </div>
  )
}

export default Navbar
