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
		<div className="max-w-lg">
			<Card>
				<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
					Your Passwords
				</h5>
				{passwd.map((pass, index) => (
					<KeyValue key={index} name={pass.key} value={pass.value} />
				))}
			</Card>
		</div>
	);
};

export default YourPasswords;
