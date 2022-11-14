import React from 'react';
import { useEffect } from 'react';
import SquareBox from '../components/password/SquareBox';
import styles from '../styles/Home.module.css';

const password = ({ setCurrPage }) => {
	useEffect(() => {
		setCurrPage('password');
	}, []);

	return (
		<div className={`${styles.container} flex items-center justify-center h-screen`}>
			<div>
				<SquareBox />
			</div>
		</div>
	);
};

export default password;
