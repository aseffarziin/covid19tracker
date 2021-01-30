import React, { useState, useEffect } from 'react';
import styles from '../styles/cards/cards.module.scss';
import { Grid } from '@material-ui/core';
import axios from 'axios';

const Cards = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get('https://api.covid19api.com/summary').then((res) => {
      setData(res.data.Global);
    })
  }, []);

  const separate = (Number) => {
    Number += '';
    Number = Number.replace(',', '');
    let x = Number.split('.');
    let y = x[0];
    let z = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(y)) y = y.replace(rgx, '$1' + ',' + '$2');
    return y + z;
  }

  return (
    <Grid container direction="row" className={styles.cards}>
      <Grid item xs={12} sm={6} md={4} lg={3} className={styles.cardContainer}>
        <div className={styles.card}>
          <p className={styles.tag}>Total</p>
          <p className={styles.number}>
                {separate(data.TotalConfirmed)}
            </p>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} className={styles.cardContainer}>
        <div className={styles.activeCard}>
          <p className={styles.activeTag}>Active</p>
          <p className={styles.activeNumber}>
            {separate(data.TotalConfirmed - data.TotalRecovered)}
          </p>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} className={styles.cardContainer}>
        <div className={styles.card}>
          <p className={styles.tag}>Recovered</p>
          <p className={styles.number}>{separate(data.TotalRecovered)}</p>
        </div>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} className={styles.cardContainer}>
        <div className={styles.card}>
          <p className={styles.tag}>Deaths</p>
          <p className={styles.number}>{separate(data.TotalDeaths)}</p>
        </div>
      </Grid>
    </Grid>
  );
};

export default Cards;
