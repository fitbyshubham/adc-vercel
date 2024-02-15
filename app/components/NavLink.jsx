const NavLink = ({ title, path, handleClick }) => {
  return (
    <a className="font-semibold text-[20px]" href={path} onClick={handleClick}>
      {title}
    </a>
  )
}

export default NavLink
