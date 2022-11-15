import React, { useState } from 'react';
import CreateRandomPassword from './CreateRandomPassword';
import TypePassword from './TypePassword';
import { Card, Button } from 'flowbite-react';

const CreateNew = () => {
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

	return (
		<div style={{ width: '70vw', backgroundColor: 'white', maxWidth: '70vw' }}>
			<div>
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
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="facebook"
					required
				/>
			</div>
			<label
				htmlFor="default-toggle"
				className="inline-flex relative items-center cursor-pointer"
			>
				<input
					name="toogle"
					type="checkbox"
					value={createNew.toogle}
					onChange={() => {
						setCreateNew({ ...createNew, toogle: !createNew.toogle });
					}}
					id="default-toggle"
					className="sr-only peer"
				/>
				<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
				<span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
					Create custom password
				</span>
			</label>
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
			<div>
				<Button
					onClick={() => console.log('data is: ', createNew)}
					style={{ width: '50%' }}
					gradientDuoTone="pinkToOrange"
				>
					save securely on BlockChain
				</Button>
			</div>
		</div>
	);
};

export default CreateNew;
