import React from 'react';
import { useEffect } from 'react';
import CreateRandomPassword from '../components/password/CreateRandomPassword';
import styles from '../styles/Home.module.css';

const password = ({ setCurrPage }) => {
	useEffect(() => {
		setCurrPage('password');
	}, []);

	return (
		<div className={`${styles.container} flex items-center justify-center h-screen`}>
			<div>
				<CreateRandomPassword />
			</div>
		</div>
	);
};

export default password;
