import React from "react";
import Image from "next/image";

const Home_screen = () => {
  return (
    <div className=" bg-gradient-to-r from-[#d13049] to-[#f2cbcb]">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex justify-center sm:justify-end my-auto">
          <div>
            <p className="text-xl sm:text-4xl md:text-6xl lg:text-8xl">Hello</p>
            <p className="text-xl sm:text-4xl md:text-6xl lg:text-8xl">Deependu</p>
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
