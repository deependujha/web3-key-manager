import React from 'react';
import Card from './CardScreen';

const Info = () => {
	return (
		<div className="container mx-auto my-10">
			<div className="text-xl md:text-3xl  flex justify-center my-5 font-bold text-center">
				<p> One Stop Solution For All Your Passwords 🔒🔑 </p>
			</div>
			<div className="md:grid md:grid-cols-3 ">
				<div className="mx-5 my-3">
					<Card
						img="/images/homeScreen/wallet.png"
						heading="Connect With Your Wallet"
						text="Securily login with your metamask wallet and sign-in into Web3-Key-Manager."
					/>
				</div>
				<div className="mx-5 my-3">
					{' '}
					<Card
						img="/images/homeScreen/shield.png"
						heading="Store Your Password Securely"
						text="Store all of your passwords securely in encrypted format on Interplanetary File System (IPFS)."
					/>
				</div>
				<div className="mx-5 my-3">
					{' '}
					<Card
						img="/images/homeScreen/blockchain.png"
						heading="Leverage The Power Of Blockchain"
						text="All your passwords are encrypted using LIT protocol, and are stored on decentralized storages (IPFS)."
					/>
				</div>
			</div>
			<div className="md:grid md:grid-cols-3 ">
				<div className="mx-5 my-3">
					<Card
						img="/images/homeScreen/padlock.png"
						heading="Generate Random Passwords"
						text="Generate strong, hard to crack and random passwords for all your applications."
					/>
				</div>
				<div className="mx-5 my-3">
					{' '}
					<Card
						img="/images/homeScreen/jigsaw.png"
						heading="Contribute To The Comunity"
						text="If you like our initiative, you can contribute to it by visiting 'Contribute' section."
					/>
				</div>
				<div className="mx-5 my-3">
					{' '}
					<Card
						img="/images/homeScreen/best-product.png"
						heading="Purchase For More "
						text="Buy our premium plans to store more password secuely on the blockchain."
					/>
				</div>
			</div>
		</div>
	);
};

export default Info;
