import React from "react";
import Card from "./CardScreen";

const Info = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="text-4xl flex justify-center">
        <p> The autopilot for all your passwords </p>
      </div>
      <div className="grid grid-cols-3 gap-6 my-10">
        <div>
          <Card />
        </div>
        <div>
          {" "}
          <Card />
        </div>
        <div>
          {" "}
          <Card />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 my-10">
        <div>
          <Card />
        </div>
        <div>
          {" "}
          <Card />
        </div>
        <div>
          {" "}
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Info;
