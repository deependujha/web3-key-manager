import React from 'react';
import { useEffect } from 'react';

const password = ({ setCurrPage }) => {
	useEffect(() => {
		setCurrPage('password');
	}, []);

	return <div>password</div>;
};

export default password;
