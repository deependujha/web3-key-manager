import React from 'react';
import Image from 'next/image';

const Home_screen = () => {
	return (
    <div className=" bg-gradient-to-r from-[#d13049] to-[#f2cbcb]">
      <div className="grid grid-cols-2 gap-4">
        <div className="mx-20 my-auto">
          <div>
            <div className="text-xl sm:text-4xl md:text-6xl lg:text-7xl font-bold">
              Web3 Key Manager
            </div>
            <div className="my-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              <div>- Your decentralized password manager</div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center">
          <Image
            src={`/images/homeScreen/screen_img.svg`}
            width="639"
            height="200"
            alt="loading..."
          />
        </div>
      </div>
    </div>
  );
};

export default Home_screen;
