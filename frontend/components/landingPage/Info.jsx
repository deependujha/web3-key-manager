import React from 'react';
import Card from './CardScreen';

const Info = () => {
	return (
		<div className="container mx-auto my-10">
			<div className="text-4xl flex justify-center my-5">
				<p> One stop solution for all your passwords 🔒🔑 </p>
			</div>
			<div className="md:grid md:grid-cols-3 ">
				<div className="mx-5 my-3">
					<Card />
				</div>
				<div className="mx-5 my-3">
					{' '}
					<Card />
				</div>
				<div className="mx-5 my-3">
					{' '}
					<Card />
				</div>
			</div>
			<div className="md:grid md:grid-cols-3 ">
				<div className="mx-5 my-3">
					<Card />
				</div>
				<div className="mx-5 my-3">
					{' '}
					<Card />
				</div>
				<div className="mx-5 my-3">
					{' '}
					<Card />
				</div>
			</div>
		</div>
	);
};

export default Info;
