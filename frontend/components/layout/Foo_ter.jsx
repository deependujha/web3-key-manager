import React from "react";
import { Footer } from "flowbite-react";

const Foo_ter = () => {
  return (
    <div>
      <Footer container={true} >
        <div className="w-full text-center">
          <Footer.Divider />
          <Footer.Copyright href="#" by="Web3-Key-Manager™" year={2022} />
        </div>
      </Footer>
    </div>
  );
};

export default Foo_ter;
