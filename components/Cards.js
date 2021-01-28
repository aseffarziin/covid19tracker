import React from 'react'
import styles from '../styles/cards/cards.module.scss'
import { Grid } from '@material-ui/core'

const Cards = () => {
  return (
    <Grid container direction='row' className={styles.cards}>
      <Grid item xs={12} sm={6} md={3} className={styles.cardContainer} >
        <div className={styles.card}>
        <p className={styles.tag}>Total</p>
        <p className={styles.number}>32</p>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={3} className={styles.cardContainer} >
        <div className={styles.card}>
        <p className={styles.tag}>Total</p>
        <p className={styles.number}>32</p>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={3} className={styles.cardContainer} >
        <div className={styles.card}>
        <p className={styles.tag}>Total</p>
        <p className={styles.number}>32</p>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={3} className={styles.cardContainer} >
        <div className={styles.card}>
        <p className={styles.tag}>Total</p>
        <p className={styles.number}>32</p>
        </div>
      </Grid>
    </Grid>
  )
}

export default Cards