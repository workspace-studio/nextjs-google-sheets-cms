import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styles from './Home.module.scss';

const Home: React.FC = () => (
  <Container className={styles.container} classes={{ root: styles.root }}>
    <Typography variant="h1" className={styles.title}>
      Welcome to 
      {' '}
      <a href="https://nextjs.org">Next.js!</a>
    </Typography>
    <Typography variant="body1" className={styles.description}>
      Get started by editing 
      {' '}
      <code className={styles.code}>pages/index.js</code>
    </Typography>
    <Grid className={styles.grid}>
      <a href="https://nextjs.org/docs" className={styles.card}>
        <Typography variant="h3">Documentation &rarr;</Typography>
        <Typography variant="body1">Find in-depth information about Next.js features and API.</Typography>
      </a>
      <a href="https://nextjs.org/learn" className={styles.card}>
        <Typography variant="h3">Learn &rarr;</Typography>
        <Typography variant="body1">Learn about Next.js in an interactive course with quizzes!</Typography>
      </a>
      <a href="https://github.com/vercel/next.js/tree/master/examples" className={styles.card}>
        <Typography variant="h3">Examples &rarr;</Typography>
        <Typography variant="body1">Discover and deploy boilerplate example Next.js projects.</Typography>
      </a>
      <a
        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className={styles.card}
      >
        <Typography variant="h3">Deploy &rarr;</Typography>
        <Typography variant="body1">Instantly deploy your Next.js site to a public URL with Vercel.</Typography>
      </a>
    </Grid>
  </Container>
);

export default Home;
