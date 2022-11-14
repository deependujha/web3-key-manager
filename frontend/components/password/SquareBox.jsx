import React, { useState } from 'react';
import { Card } from 'flowbite-react';
const SquareBox = () => {
	const [input, setInput] = useState(false);
	const [sliderValue, setSliderValue] = useState('14');

	return (
		<div>
			<div className="max-w-sm">
				<Card>
					<h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
						Generate strong random password
					</h5>

					<div className="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
						<input
							checked={input}
							id="bordered-checkbox-1"
							type="checkbox"
							onChange={(e) => {
								console.log('printing input: ', input);
								setInput(e.target.checked);
							}}
							name="bordered-checkbox-1"
							className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
						/>
						<label
							htmlFor="bordered-checkbox-1"
							className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Small letters
						</label>
					</div>
					<div className="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
						<input
							checked={input}
							id="bordered-checkbox-2"
							type="checkbox"
							onChange={(e) => {
								console.log('printing input: ', input);
								setInput(e.target.checked);
							}}
							name="bordered-checkbox-2"
							className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
						/>
						<label
							htmlFor="bordered-checkbox-2"
							className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Capitalized letters
						</label>
					</div>
					<div className="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
						<input
							id="bordered-checkbox-3"
							checked={input}
							type="checkbox"
							onChange={(e) => {
								console.log('printing input: ', input);
								setInput(e.target.checked);
							}}
							name="bordered-checkbox-3"
							className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
						/>
						<label
							htmlFor="bordered-checkbox-3"
							className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Numbers
						</label>
					</div>
					<div className="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
						<input
							checked={input}
							id="bordered-checkbox-4"
							type="checkbox"
							name="bordered-checkbox-4"
							onChange={(e) => {
								console.log('printing input: ', input);
								setInput(e.target.checked);
							}}
							className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
						/>
						<label
							htmlFor="bordered-checkbox-4"
							className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Special characters
						</label>
					</div>
					<div>
						<label
							htmlFor="minmax-range"
							className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							password length: {sliderValue}
						</label>
						<input
							id="minmax-range"
							type="range"
							min="4"
							max="32"
							value={sliderValue}
							onChange={(e) => {
								setSliderValue(e.target.value);
								console.log('slider value is: ', sliderValue);
							}}
							className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
						/>
					</div>
					<button
						type="submit"
						className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Login to your account
					</button>
				</Card>
			</div>
		</div>
	);
};

export default SquareBox;
