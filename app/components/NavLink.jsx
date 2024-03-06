import Link from 'next/link';

const NavLink = ({ title, path, handleClick, fontSize }) => {
	return (
		<Link
			className='font-semibold'
			style={{ fontSize }}
			href={path}
			onClick={handleClick}>
			{title}
		</Link>
	);
};

export default NavLink;
