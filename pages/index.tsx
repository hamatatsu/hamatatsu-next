import Head from 'next/head';
import styles from '../styles/Home.module.css';
import {Twitter, GitHub} from '@material-ui/icons';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>hamatatsu&apos;s page</title>
        <meta name="description" content="The home page of hamatatsu's page." />
      </Head>

      <main className={styles.main}>
        <img
          className={styles.profileImg}
          src="/profile.png"
          alt="profile icon"
          width={128}
          height={128}
        />
        <h1 className={styles.title}>
          Welcome to my page
        </h1>

        <div className={styles.socialLinks}>
          <a href="https://twitter.com/hamatatsu0">
            <Twitter />
          </a>
          <a href="https://github.com/hamatatsu">
            <GitHub />
          </a>
        </div>

        <p className={styles.description}>
          Undergoing construction😉
        </p>
      </main>
    </div>
  );
}
