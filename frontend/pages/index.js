import Head from "next/head";
import Image from "next/image";
import Nav_baar from "../components/landingPage/Nav_baar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Nav_baar />
      <div>Hii world</div>
    </div>
  );
}
