import React from 'react';

const TypePassword = ({ password, setPassword }) => {
	return (
		<div>
			<label
				htmlFor="first_name"
				className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
			>
				Password
			</label>
			<input
				type="password"
				value={password}
				onChange={setPassword}
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="password"
				required
			/>
		</div>
	);
};

export default TypePassword;
