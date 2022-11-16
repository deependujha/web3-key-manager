import React from 'react';
import { useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { useSelector, useDispatch } from 'react-redux';
import AboutComponent from '../components/about/AboutComponent';

const about = ({ setCurrPage }) => {
	const count = useSelector((state) => state.usr.signer);

	useEffect(() => {
		setCurrPage('about');
	}, []);

	return (
    <div className="bg-gradient-to-r from-[#f0687d] to-[#f6a3a3]">
      <div className="pt-14 flex justify-center font-bold text-4xl">
        About Us
      </div>
      <AboutComponent />
    </div>
  );
};

export default about;
