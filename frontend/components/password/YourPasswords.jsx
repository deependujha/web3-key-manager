import React, { useState, useEffect } from 'react';
import KeyValue from './KeyValue';
import { useSelector } from 'react-redux';
import axios from 'axios';
import lit from '../../lit_protocol/lit';

const YourPasswords = () => {
	const myContract = useSelector((state) => state.usr.contract);
	const [myKeys, setMyKeys] = useState([]);
	const [loading, setLoading] = useState(false);

	const passwd = [
		{ key: 'facebook', value: 'deependu' },
		{ key: 'instagram', value: 'nitesh' },
		{ key: 'github', value: 'alpha' },
	];

	const myFunc = () => {
		setLoading(true);
		myContract
			.getMyPassword()
			.then((response) => {
				setMyKeys(response);
				for (let i = 0; i < response.length; i++) {
					axios
						.get(`https://gateway.pinata.cloud/ipfs/${response[i].value}`)
						.then(async (myJson) => {
							const enPass = myJson.encrypedPassword;
							const encryptedSymmetricKey = myJson.encryptedSymmetricKey;
							const deependu = await dataURItoBlob(enPass);
							// console.log('encrypted text: ', encryptedText);
							const decrypted = await lit.decrypt(deependu, enSymmetricKey);
							console.log('decrypted text: ', decrypted);
							response[i].value = decrypted;
						})
						.catch((err) => {
							console.log(
								'error occurred while fetching data from IPFS (PINATA API)'
							);
							console.log(err);
						});
				}
			})
			.catch((err) => {
				console.log('Error occurred: ', err);
			});
		setLoading(false);
	};
	useEffect(() => {
		myFunc();
	}, []);
	return (
		<div style={{ width: '70vw', backgroundColor: 'white' }}>
			{myKeys.map((pass, index) => (
				<KeyValue key={index} name={pass.key} value={pass.value} />
			))}
		</div>
	);
};

export default YourPasswords;
