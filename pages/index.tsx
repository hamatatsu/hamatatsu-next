import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>hamatatsu&apos;s page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img
          className={styles.borderCircle}
          src="/profile.png"
          width={128}
          height={128}
        />
        <h1 className={styles.title}>
          Welcome to my page
        </h1>

        <p className={styles.description}>
          Undergoing construction😉
        </p>

        <p className={styles.link2github}>
          <a href="https://github.com/hamatatsu">Go to GitHub</a>
        </p>
      </main>
    </div>
  );
}
