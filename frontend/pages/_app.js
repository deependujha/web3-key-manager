import '../styles/globals.css';
import Nav_baar from '../components/landingPage/Nav_baar';
import Head from 'next/head';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
	const [currPage, setCurrPage] = useState('home');

	return (
		<>
			<Head>
				<title>Web3-Key-Manager</title>
				<link rel="shortcut icon" href="/images/special/logo.png" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Nav_baar currPage={currPage} />
			<hr />
			<Component {...pageProps} setCurrPage={setCurrPage} />
		</>
	);
}

export default MyApp;
