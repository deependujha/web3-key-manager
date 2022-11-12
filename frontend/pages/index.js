import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { useEffect } from 'react';
import Home_screen from '../components/landingPage/Home_screen';
import Info from '../components/landingPage/Info';

export default function Home({ setCurrPage }) {
	useEffect(() => {
		setCurrPage('home');
	}, []);

  return (
    <>
      <div>
        <Home_screen />
      </div>
      <div>
        <Info/>
      </div>
    </>
  );
}
