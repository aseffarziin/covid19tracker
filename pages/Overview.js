import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Sidebar from './../components/Sidebar';
import { Grid, Hidden } from '@material-ui/core';
import Header from '../components/Header';
import Cards from '../components/Cards';

const Overview = () => {
  return (
    <div>
      <div>
        <Head>
          <title>Overview</title>
        </Head>
        <Grid container direciton="row">
          <Hidden only={(['xs'], ['sm'])}>
            <Grid item xs={0} md={2} className={styles.leftGrid}>
              <Sidebar />
            </Grid>
          </Hidden>
          <Grid item xs={12} md={10} className={styles.rightGrid}>
            <Header />
            <Cards />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Overview;
