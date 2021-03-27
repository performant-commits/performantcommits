import Head from "next/head";
import styles from "../styles/Home.module.css";
import Terminal from "../components/Terminal";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next-TS Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Terminal />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/filippo-fonseca"
          target="_blank"
          rel="noopener noreferrer"
        >
          This template is created and maintained with ❤️ by Filippo Fonseca.
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/2111/2111425.svg"
            alt="GitHub Logo"
            className={styles.logo}
          />
        </a>
      </footer>
    </div>
  );
}
