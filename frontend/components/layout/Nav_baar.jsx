import React from 'react';
import { Navbar, Button } from 'flowbite-react';
import { ethers } from 'ethers';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { updateUsr } from '../../redux/slices/usrData';
import ABI from '../../ABI.js';

const Nav_baar = ({ currPage }) => {
	const getSigner = useSelector((state) => state.usr.signer);
	const dispatch = useDispatch();

	// Function for connecting the app with wallet
	const connectWallet = async () => {
		if (getSigner === '') {
			// A Web3Provider wraps a standard Web3 provider, which is
			// what MetaMask injects as window.ethereum into each page
			let provider = new ethers.providers.Web3Provider(window.ethereum);
			// to check with which network metamask is currently connected, and show required alert
			const { chainId } = await provider.getNetwork();

			// if connected chain is not 'Goerli', switch network.
			if (chainId !== 80001) {
				ethereum.request({
					method: 'wallet_switchEthereumChain',
					params: [
						{
							chainId: '0x13881',
						},
					],
				});
			}

			// MetaMask requires requesting permission to connect users accounts
			await provider.send('eth_requestAccounts', []);

			// The MetaMask plugin also allows signing transactions to
			// send ether and pay to change state within the blockchain.
			// For this, you need the account signer...
			let signer = provider.getSigner();
			// console.log('connected with metamask');
			// console.log("user's address: ", await signer.getAddress());

			// creating an instance of the smart contract
			// it takes three parameters => {contract's address, abi, signer/provider}
			// provider can perform read only transactions
			// signer can perform all kind of transactions
			let contract = new ethers.Contract(
				'0x7D15D4D01E7f142e667BdBC041d6CE1dDe9A4768',
				ABI,
				signer
			);

			dispatch(updateUsr({ signer, contract }));

			// setMyContract(contract);
			// console.log(contract.address);
		} else {
			dispatch(updateUsr({ signer: '', contract: '' }));
		}
	};

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
					{getSigner === '' && (
						<Button
							outline={true}
							gradientDuoTone="pinkToOrange"
							onClick={connectWallet}
						>
							Connect Wallet
						</Button>
					)}
					{getSigner !== '' && (
						<Button color="failure" onClick={connectWallet}>
							logout
						</Button>
					)}

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
