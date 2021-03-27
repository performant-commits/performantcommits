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
        <h1 className={styles.title}>⚡️ Performant Commits</h1>
        <p className={styles.description}>
          A sleeker, more performant way of writing better, more efficient, and
          understandable commit messages.
        </p>
        <Terminal />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/filippo-fonseca"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created and maintained with ❤️ by Filippo Fonseca.
          <img
            src="https://www.logo.wine/a/logo/GitHub/GitHub-Icon-White-Dark-Background-Logo.wine.svg"
            alt="GitHub Logo"
            className={styles.logo}
          />
        </a>
      </footer>
    </div>
  );
}
