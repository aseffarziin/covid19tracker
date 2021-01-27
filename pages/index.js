import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Sidebar from './../components/Sidebar';
import { Grid, Hidden } from '@material-ui/core';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Covid-19 Tracker</title>
      </Head>
      <Grid container direciton='row'>
        <Hidden mdDown>
        <Grid item xs={0} md={2} className={styles.leftGrid} >
          <Sidebar />
        </Grid>
        </Hidden>
        <Grid item xs={12} md={10} className={styles.rightGrid} >
         <h1>Mulish I am</h1>
        </Grid>
      </Grid>
    </div>
  )
}
