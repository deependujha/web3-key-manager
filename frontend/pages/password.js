import React from 'react';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';


const password = ({ setCurrPage }) => {
	useEffect(() => {
		setCurrPage('password');
	}, []);

	return (
		<div className={styles.container}>
			<div>password</div>
		</div>
	);
};

export default password;
