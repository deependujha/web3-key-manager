import React, { useState } from 'react';
import { Card, Button } from 'flowbite-react';
import KeyValue from './KeyValue';

const YourPasswords = () => {
	const passwd = [
		{ key: 'facebook', value: 'deependu' },
		{ key: 'instagram', value: 'nitesh' },
		{ key: 'github', value: 'alpha' },
	];
	return (
		<div style={{ width: '70vw', backgroundColor: 'white' }}>
			{passwd.map((pass, index) => (
				<KeyValue key={index} name={pass.key} value={pass.value} />
			))}
		</div>
	);
};

export default YourPasswords;
