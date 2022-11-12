import React from 'react';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';

const about = ({ setCurrPage }) => {
	useEffect(() => {
		setCurrPage('about');
	}, []);

	return (
		<div className={styles.container}>
			<div>about</div>
		</div>
	);
};

export default about;
