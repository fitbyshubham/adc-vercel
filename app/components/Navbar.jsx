'use client';
import React, { useState } from 'react';
import Menu from './Menu';
import NavLink from './NavLink';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => setOpen(!open);

	const linkList = [
		{ title: 'ADC', path: '/' },
		{ title: 'START', path: '#' },
		{ title: open ? 'CLOSE' : 'MENU', path: '#', handleClick },
	];

	return open ? (
		<Menu open={open} handleClose={handleClick} />
	) : (
		<div className='flex justify-between p-[30px] sticky top-0 w-full backdrop-blur-md z-50'>
			{linkList.map((item) => (
				<NavLink
					key={item.title}
					title={item.title}
					fontSize={20}
					path={item.path}
					handleClick={item?.handleClick}
				/>
			))}
		</div>
	);
};

export default Navbar;
