import React from "react";
import { Card } from "flowbite-react";
import Image from "next/image";

const MetaMaskConn = () => {
  return (
    <div className="max-w-sm">
      <Card>
        <div className=" flex justify-center">
          <Image
            src="/images/special/metamask.png"
            height="250"
            width="300"
            alt="loading.."
          />
        </div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Please Connect With Your MetaMask Wallet
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Click on 'connect wallet' on the navbar to connect with your
            metamask wallet.
          </p>
      </Card>
    </div>
  );
};

export default MetaMaskConn;
