import React, { useState } from 'react';
import CreateRandomPassword from './CreateRandomPassword';
import TypePassword from './TypePassword';
import { Card, Button } from 'flowbite-react';
import Swal from 'sweetalert2';
import pinataSDK from '@pinata/sdk';
import lit from '../../lit_protocol/lit';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const CreateNew = () => {
	const router = useRouter();
	const mySigner = useSelector((state) => state.usr.signer);
	const myContract = useSelector((state) => state.usr.contract);
	let newPasswd = {
		project: '',
		password: '',
		toogle: false,
	};
	const [createNew, setCreateNew] = useState(newPasswd);
	const passwdChange = (e) => {
		setCreateNew({ ...createNew, password: e.target.value });
	};

	const directlySetPassword = (val) => {
		setCreateNew({ ...createNew, password: val });
	};

	const saveOnBlockChain = async () => {
		if (createNew.project === '') {
			// alert('Please write the application/project name');
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Please write the application/project name!',
				confirmButtonColor: '#D6465B',
			});
			return;
		}
		if (createNew.password === '') {
			if (createNew.toogle === false) {
				// alert('Please generate the random password first');
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Please generate the random password first!',
					confirmButtonColor: '#D6465B',
				});
			} else {
				// alert('Please write your password');
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Please write your password!',
					confirmButtonColor: '#D6465B',
				});
			}
			return;
		}
		// console.log('data is: ', createNew);
		const { encryptedString, encryptedSymmetricKey } = await lit.encrypt(
			createNew.password
		);
		const encryptedStringInDataURI = await blobToDataURI(encryptedString);
		const myJson = {
			encrypedPassword: encryptedStringInDataURI,
			encryptedSymmetricKey: encryptedSymmetricKey,
		};
		const pinata = new pinataSDK(
			'51220cd04fd72ad817b7',
			'7f0f1867048b0182ac840660dac6341cb6a39bce45415db0be2cb31ae9874cc0'
		);

		const options = {
			pinataMetadata: {
				name: 'timeForGlory',
				keyvalues: {
					customKey: 'keep',
					customKey2: 'hustling',
				},
			},
			pinataOptions: {
				cidVersion: 1,
			},
		};

		pinata
			.pinJSONToIPFS(myJson, options)
			.then((result) => {
				//handle results here
				console.log(
					'printing IPFS hash of the uploaded password: ',
					result.IpfsHash
				);
				// setIPFSHash(result.IpfsHash);
				myContract
					.createNewKey(createNew.project, result.IpfsHash)
					.then((tx) => {
						console.log('transaction occured : ', tx.hash);
						return tx
							.wait()
							.then(() => {
								// console.log('Key and ipfs hash saved successfully');
								Swal.fire({
									title: 'Done',
									text: 'Your password has been saved securely successfully',
									icon: 'success',
									confirmButtonColor: '#D6465B',
								});
							})
							.catch((err) => {
								Swal.fire({
									icon: 'error',
									title: 'Oops... Error occurred',
									text: err,
									confirmButtonColor: '#D6465B',
								});
							});
					})
					.catch((err) => {
						Swal.fire({
							icon: 'error',
							title: 'Oops... Error occurred',
							text: err,
							confirmButtonColor: '#D6465B',
						});
					});
			})
			.catch((err) => {
				//handle error here
				Swal.fire({
					icon: 'error',
					title: 'Oops... Error occurred',
					text: err,
					confirmButtonColor: '#D6465B',
				});
			});
		router.push('/');
	};

	// (Helper) Turn blob data to data URI
	// @param { Blob } blob
	// @return { Promise<String> } blob data in data URI
	//
	const blobToDataURI = (blob) => {
		return new Promise((resolve, reject) => {
			var reader = new FileReader();

			reader.onload = (e) => {
				var data = e.target.result;
				resolve(data);
			};
			reader.readAsDataURL(blob);
		});
	};

	//
	// (Helper) Convert data URI to blob
	// @param { String } dataURI
	// @return { Blob } blob object
	//
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

	return (
		<div
			style={{ width: '70vw', backgroundColor: 'white', maxWidth: '70vw' }}
			className="my-6"
		>
			<div className="px-8">
				<label
					htmlFor="first_name"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
				>
					Application/ Project name
				</label>
				<input
					onChange={(e) => {
						setCreateNew({ ...createNew, project: e.target.value });
					}}
					name="project"
					type="text"
					className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="facebook"
					required
				/>
			</div>
			<div className="my-6 px-8">
				<label
					htmlFor="default-toggle"
					className="inline-flex relative items-center cursor-pointer"
				>
					<input
						name="toogle"
						type="checkbox"
						value={createNew.toogle}
						onChange={() => {
							setCreateNew({
								...createNew,
								toogle: !createNew.toogle,
								password: '',
							});
						}}
						id="default-toggle"
						className="sr-only peer"
					/>
					<div className=" w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
					<span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
						Create custom password
					</span>
				</label>
			</div>
			{createNew.toogle ? (
				<TypePassword
					password={createNew.password}
					setPassword={passwdChange}
				/>
			) : (
				<CreateRandomPassword
					password={createNew.password}
					directlySetPassword={directlySetPassword}
				/>
			)}
			<div className="px-8 my-6">
				<Button onClick={saveOnBlockChain} gradientDuoTone="pinkToOrange">
					save securely on BlockChain
				</Button>
			</div>
		</div>
	);
};

export default CreateNew;
