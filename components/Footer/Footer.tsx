import React from "react";

import styles from "./Footer.module.scss";

const Footer: React.FC = () => (
  <footer className={styles.container}>
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by
      {" "}
      <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
    </a>
  </footer>
  );

export default Footer;
