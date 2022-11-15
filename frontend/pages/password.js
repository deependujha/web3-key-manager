import React from 'react';
import { useEffect } from 'react';
import CreateRandomPassword from '../components/password/CreateRandomPassword';
import YourPasswords from '../components/password/YourPasswords';
import styles from '../styles/Home.module.css';

const password = ({ setCurrPage }) => {
	useEffect(() => {
		setCurrPage('password');
	}, []);

	return (
		<div className={`${styles.container} flex items-center justify-center h-screen bg-gradient-to-r from-[#d13049] to-[#f2cbcb]`}>
			<div>
				{/* <CreateRandomPassword /> */}
				<YourPasswords />
			</div>
		</div>
	);
};

export default password;
