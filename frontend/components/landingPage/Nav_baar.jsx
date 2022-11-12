import React from 'react';
import { Navbar, Button } from 'flowbite-react';
import Link from 'next/link';
import Image from 'next/image';

const Nav_baar = ({ currPage }) => {
	return (
		<div className="bg-gray-500">
			<Navbar fluid={true} rounded={true}>
				<span>
					<Link href="/">
						<div className="flex">
							<Image
								src="/images/special/logo.png"
								alt="Flowbite Logo"
								width="40"
								height="40"
							/>
							<span className="ml-2 self-center whitespace-nowrap text-xl font-semibold dark:text-white">
								Web3-Key-Manager
							</span>
						</div>
					</Link>
				</span>
				<div className="flex md:order-2">
					<Button className="bg-red-500">
						Connect_Wallet
					</Button>
					<Navbar.Toggle />
				</div>
				<Navbar.Collapse>
					<Navbar
						className={`text-xl hover:text-red-500 ${
							currPage === 'home' ? 'text-red-500' : ''
						}`}
					>
						<Link href="/">Home</Link>
					</Navbar>
					<Navbar
						className={`text-xl hover:text-red-500 ${
							currPage === 'password' ? 'text-red-500' : ''
						}`}
					>
						<Link href="/password">Password</Link>
					</Navbar>
					<Navbar
						className={`text-xl hover:text-red-500 ${
							currPage === 'about' ? 'text-red-500' : ''
						}`}
					>
						<Link href="/about">About</Link>
					</Navbar>
					<Navbar className={`text-xl hover:text-red-500`}>
						<a
							href="https://github.com/deependujha/web3-key-manager"
							target="_blank"
						>
							Contribute
						</a>
					</Navbar>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
};

export default Nav_baar;
