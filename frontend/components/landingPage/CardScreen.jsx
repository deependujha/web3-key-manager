import React from 'react';
import { Card } from 'flowbite-react';
import Image from 'next/image';
import { motion } from "framer-motion";


const CardScreen = ({ img, heading, text }) => {
  return (
    <motion.div whileHover={{ scale: 0.9 }} whileTap={{ scale: 0.9 }}>
      <Card>
        <div className="flex flex-col items-center pb-10">
          <Image src={img} alt="Bonnie image" height={60} width={60} />
          <div className="mb-1 text-xl text-gray-900 dark:text-white font-bold">
            {heading}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 my-2">
            {text}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default CardScreen;
