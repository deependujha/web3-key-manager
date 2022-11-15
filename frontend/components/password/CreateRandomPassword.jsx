import React, { useState } from 'react';
import { Card, Button } from 'flowbite-react';

const CreateRandomPassword = () => {
	const [length, setLength] = useState(14);
	const [password, setPassword] = useState('');
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

		setPassword(pass);
		setCopytxt('copy');
	}

	const copyPassword = () => {
		{
			navigator.clipboard.writeText(password);
			setCopytxt('copied');
		}
	};

	return (
			<div className="max-w-lg">
				<Card>
					<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
						Generate strong random password
					</h5>

					<div>
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
							max="32"
							name="length"
							value={length}
							onChange={(e) => {
								setLength(e.target.value);
							}}
							className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
						/>
					</div>
					<Button onClick={generateP} size="lg" gradientDuoTone="pinkToOrange">
						Generate password
					</Button>

					<div>
						{password === '' ? 'Generate password' : 'your password is:'}
					</div>
					{password !== '' && (
						<div className="flex justify-between">
							<span className=""> {password}</span>
							<Button gradientMonochrome="failure" onClick={copyPassword}>
								{copytxt}
							</Button>
						</div>
					)}
				</Card>
			</div>
	);
};

export default CreateRandomPassword;
