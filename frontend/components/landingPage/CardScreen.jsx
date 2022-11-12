import React from "react";
import { Card } from "flowbite-react";

const CardScreen = ({image , heading , text}) => {
  return (
    <Card>
      <div className="flex flex-col items-center pb-10">
        <img
          className="mb-3 h-24 w-24 rounded-full shadow-lg"
          src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
          alt="Bonnie image"
        />
        <div className="mb-1 text-xl text-gray-900 dark:text-white font-bold">
          {heading}
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400 my-2">
          {text}
        </span>
      </div>
    </Card>
  );
};

export default CardScreen;
