import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Sidebar from './../components/Sidebar';
import { Grid, Hidden } from '@material-ui/core';
import AllPatients from '../components/AllPatients';
import Header from '../components/Header';
import AddButton from '../components/AddButton';


const Patients = () => {
  return (
      <div>
        <Head>
          <title>Patients</title>
        </Head>
        <Grid container direciton="row">
          <Hidden only={(['xs'], ['sm'])}>
            <Grid item xs={0} md={2} className={styles.leftGrid}>
              <Sidebar />
            </Grid>
          </Hidden>
          <Grid item xs={12} md={10} className={styles.rightGrid}>
            <Header title='Patients' style={{margin: '40px auto'}} />
            <AllPatients />
          </Grid>
        </Grid>
      </div>
  );
};

export default Patients;
