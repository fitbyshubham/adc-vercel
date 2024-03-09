import Link from "next/link"
import ADCLogo from "./ADCLogo"

const NavLink = ({ title, logo, path, handleClick, fontSize }) => {
  return (
    <Link
      className="font-semibold"
      style={{ fontSize }}
      href={path}
      onClick={handleClick}
    >
      {logo ? <ADCLogo /> : <div>{title}</div>}
    </Link>
  )
}

export default NavLink
