import React from "react";
import { useEffect } from "react";
import CreateRandomPassword from "../components/password/CreateRandomPassword";
import PasswordComponent from "../components/password/PasswordComponent";
import YourPasswords from "../components/password/YourPasswords";
import styles from "../styles/Home.module.css";
import { useSelector } from "react-redux";
import MetaMaskConn from "../components/extras/MetaMaskConn";

const password = ({ setCurrPage }) => {
  const getSigner = useSelector((state) => state.usr.signer);

  useEffect(() => {
    setCurrPage("password");
  }, []);

  return (
    <div
      className={`${styles.container} flex items-center justify-center h-screen bg-gradient-to-r from-[#d13049] to-[#f2cbcb]`}
    >
      {getSigner === "" ? (
        <div>
          {" "}
          <MetaMaskConn />{" "}
        </div>
      ) : (
        <div>
          <PasswordComponent />
        </div>
      )}
    </div>
  );
};

export default password;
