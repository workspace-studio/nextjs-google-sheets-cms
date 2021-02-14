import React from "react";

import DocumentTitle from "../DocumentTitle";
import Footer from "../Footer";
import Meta from "../Meta";

import styles from "./Layout.module.scss";

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => (
  <div className={styles.container}>
    <Meta />
    <DocumentTitle title={title} />
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
);

export default Layout;
