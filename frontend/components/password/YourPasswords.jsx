import React, { useState, useEffect } from 'react';
import KeyValue from './KeyValue';
import { useSelector } from 'react-redux';
import axios from 'axios';
import lit from '../../lit_protocol/lit';
import Loading from '../extras/Loading';

const YourPasswords = () => {
	const myContract = useSelector((state) => state.usr.contract);
	const [myKeys, setMyKeys] = useState([]);
	const [loading, setLoading] = useState(false);

	

	// const passwd = [
	// 	{ key: 'facebook', value: 'deependu' },
	// 	{ key: 'instagram', value: 'nitesh' },
	// 	{ key: 'github', value: 'alpha' },
	// ];

	const myFunc = async () => {
		let nitesh = [];
		setLoading(true);
		console.log(myContract);
		myContract
			.getMyPassword()
			.then((response) => {
				for (let i = 0; i < response.length; i++) {
					axios
						.get(`https://gateway.pinata.cloud/ipfs/${response[i].value}`)
						.then(async (myJson) => {
							const enPass = myJson.data.encrypedPassword;
							const encryptedSymmetricKey = myJson.data.encryptedSymmetricKey;
							const deependu = await dataURItoBlob(enPass);
							const decrypted = await lit.decrypt(
								deependu,
								encryptedSymmetricKey
							);

							const beta = response[i].key;
							const miaMalkova = {
								key: response[i].key,
								value: decrypted.decryptedString,
							};
							nitesh.push(miaMalkova);
							setMyKeys([...nitesh]);
						})
						.catch((err) => {
							console.log(
								'error occurred while fetching data from IPFS (PINATA API)'
							);
							console.log(err);
						});
				}
				console.log('eiaoifaiohfiahfioahiofhuiahiuahfuii');
				console.log('printing my keys: ', nitesh);
			})
			.catch((err) => {
				console.log('Error occurred: ', err);
			});

		setLoading(false);
	};

	//
	// (Helper) Convert data URI to blob
	// @param { String } dataURI
	// @return { Blob } blob object

	const dataURItoBlob = (dataURI) => {
		console.log(dataURI);

		var byteString = window.atob(dataURI.split(',')[1]);
		var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
		var ab = new ArrayBuffer(byteString.length);
		var ia = new Uint8Array(ab);
		for (var i = 0; i < byteString.length; i++) {
			ia[i] = byteString.charCodeAt(i);
		}

		var blob = new Blob([ab], { type: mimeString });

		return blob;
	};

	useEffect(() => {
		myFunc();
	}, []);
	
	return (
    <div>
      {loading === true ? (
        <div>
          {" "}
          <Loading />{" "}
        </div>
      ) : (
        <div style={{ width: "70vw", backgroundColor: "white" }}>
          {myKeys.map((pass, index) => (
            <KeyValue key={index} name={pass.key} value={pass.value} />
          ))}
        </div>
      )}
    </div>
  );
};

export default YourPasswords;
