import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Robert Nacario</title>
        <meta name="description" content="Welcome to My Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <a
          href="https://www.linkedin.com/in/my-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/my-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://gitlab.com/my-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitLab
        </a>
      </header>

      <main className={styles.main}>
        <div className={styles.main}>
          <h1 className={styles.title}>Robert Nacario</h1>
          <p className={styles.description}>nursing to</p>
          <p className={styles.description}>software engineer</p>
        </div>

        <section id="projects" className={styles.section}>
          <h2>Projects</h2>
          <p>Cards that map over all projects here</p>
          {/* Insert your projects here */}
        </section>

        <section id="skills" className={styles.section}>
          <h2>Skills & Tech</h2>
          <p>Check out my technical skills and areas of expertise.</p>
          {"Reactjs Nextjs "}
        </section>

        <section id="contact" className={styles.section}>
          <h2>Contact</h2>
          <p>Feel free to get in touch with me.</p>
          {/* Insert your contact form or information here */}
        </section>
      </main>

      <footer className={styles.footer}>
        <a href="https://www.linkedin.com/in/my-profile">LinkedIN</a>
      </footer>
    </div>
  );
}
