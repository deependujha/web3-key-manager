import React from 'react';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { useSelector, useDispatch } from 'react-redux';
import AboutComponent from '../components/about/AboutComponent';

const about = ({ setCurrPage }) => {
	const count = useSelector((state) => state.usr.signer);

	useEffect(() => {
		setCurrPage('about');
	}, []);

	return (
		<div className={styles.container}>
			<AboutComponent />
		</div>
	);
};

export default about;
