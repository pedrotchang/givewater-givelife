import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Give Water Give Life</title>
        <meta name="description" content="One Survivor's Vision to Help Save Lives" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    </div>
  )
}
