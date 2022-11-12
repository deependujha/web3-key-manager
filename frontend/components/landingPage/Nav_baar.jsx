import React from "react";
import { Navbar, Button } from "flowbite-react";

const Nav_baar = () => {
  return (
    <div className="bg-gray-500">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Web3-Key-Manager
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button>Connect_Wallet</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link className="text-xl" href="/navbars" active={true}>
            Home{" "}
          </Navbar.Link>
          <Navbar.Link href="/navbars" className="text-xl">
            Password
          </Navbar.Link>
          <Navbar.Link href="/navbars" className="text-xl">
            About
          </Navbar.Link>
          <Navbar.Link href="/navbars" className="text-xl">
            Contribute
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav_baar;
