import Link from 'next/link'

const NavLink = ({ title, path, handleClick, fontSize }) => {
  return (
    <Link
      className="font-semibold text-[20px]"
      style={{ fontSize }}
      href={path}
      onClick={handleClick}
    >
      {title}
    </Link>
  )
}

export default NavLink
