import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next-TS Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a
            href="https://github.com/filippo-fonseca/next-ts-template"
            target="_blank"
          >
            Next.js with TypeScript!
          </a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code> and the
          <code className={styles.code}>package.json</code> to change your
          project info.
        </p>

        <p>
          See changes to be made? Submit an issue or pull request on{" "}
          <a
            className={styles.personalLink}
            href="https://github.com/filippo-fonseca/next-ts-template"
            target="_blank"
          >
            GitHub.
          </a>
        </p>
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
