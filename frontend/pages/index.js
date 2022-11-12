import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';

export default function Home({ setCurrPage }) {
	useEffect(() => {
		setCurrPage('home');
	}, []);

	return (
		<div className={styles.container}>
			<div>Hii world</div>
		</div>
	);
}
