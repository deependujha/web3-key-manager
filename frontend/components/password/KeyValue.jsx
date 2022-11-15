import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import Image from 'next/image';

const KeyValue = ({ name, value }) => {
	const [copytxt, setCopytxt] = useState('copy');
	const [visible, setVisible] = useState(false);

	const changeVisibility = () => {
		setVisible((val) => !val);
	};

	const copyPassword = () => {
		{
			navigator.clipboard.writeText(value);
			setCopytxt('copied');
			setTimeout(() => {
				setCopytxt('copy');
			}, 2000);
		}
	};
	return (
		<div className="flex justify-between">
			<div>
				{name}: {visible?value:"************"}
			</div>
			<div>
				<button onClick={changeVisibility}>
					<Image
						src={
							visible
								? '/images/special/passwd/eye.png'
								: '/images/special/passwd/invisible.png'
						}
						width={20}
						height={20}
						alt="visible"
					/>
				</button>
				<Button gradientMonochrome="failure" onClick={copyPassword}>
					{copytxt}
				</Button>
			</div>
		</div>
	);
};

export default KeyValue;
