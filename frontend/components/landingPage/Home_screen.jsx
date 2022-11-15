import React from 'react';
import Image from 'next/image';
import Typed from 'react-typed';

const Home_screen = () => {
	return (
		<div className=" bg-gradient-to-r from-[#d13049] to-[#f2cbcb]">
			<div className="grid grid-cols-2 gap-4">
				<div className="mx-20 my-auto">
					<div>
						<div
							className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black
						 my-10 underline"
						>
							Web3 key manager
						</div>
						<div
							className="text-xl sm:text-4xl  font-mono text-white "
							style={{ height: '200px' }}
						>
							<Typed
								strings={[
									'One solution for passwords...',
									'the security of LIT protocol...',
									'Security is our prime motto...',
									'Your own password manager...',
								]}
								typeSpeed={30}
								backSpeed={50}
								loop={true}
							/>
						</div>
					</div>
				</div>
				<div className=" flex justify-center">
					<Image
						src={`/images/homeScreen/screen_img.svg`}
						width="639"
						height="200"
						alt="loading..."
						priority={true}
					/>
				</div>
			</div>

			<br />
		</div>
	);
};

export default Home_screen;
