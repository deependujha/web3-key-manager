import React, { useState } from 'react';
import { Card, Button } from 'flowbite-react';

const CreateRandomPassword = ({ password, directlySetPassword }) => {
	const [length, setLength] = useState(14);
	const [copytxt, setCopytxt] = useState('copy');

	/* Function to generate combination of password */
	function generateP() {
		var pass = '';
		var str =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$';

		for (let i = 1; i <= length; i++) {
			var char = Math.floor(Math.random() * str.length + 1);

			pass += str.charAt(char);
		}

		directlySetPassword(pass);
		setCopytxt('copy');
	}

	const copyPassword = () => {
		{
			navigator.clipboard.writeText(password);
			setCopytxt('copied');
		}
	};

	return (
		<div style={{ width: '70vw', backgroundColor: 'white', maxWidth: '70vw' }}>
			<div className="px-8 my-6">
				<label
					htmlFor="minmax-range"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
				>
					password length: {length}
				</label>
				<input
					id="minmax-range"
					type="range"
					min="4"
					max="16"
					name="length"
					value={length}
					onChange={(e) => {
						setLength(e.target.value);
					}}
					className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
				/>
			</div>
			<div className="my-6 px-8">
				<Button onClick={generateP} gradientDuoTone="pinkToOrange">
					Generate password
				</Button>

				<div className="my-1">{password === '' ? '' : 'your password is:'}</div>
				{password !== '' && (
					<div className="flex justify-between">
						<div className="my-2"> {password}</div>
						<Button gradientMonochrome="failure" onClick={copyPassword}>
							{copytxt}
						</Button>
					</div>
				)}
			</div>
		</div>
	);
};

export default CreateRandomPassword;
