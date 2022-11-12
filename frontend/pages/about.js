import React from 'react';
import { useEffect } from 'react';

const about = ({ setCurrPage }) => {
	useEffect(() => {
		setCurrPage('about');
	}, []);

	return <div>about</div>;
};

export default about;
