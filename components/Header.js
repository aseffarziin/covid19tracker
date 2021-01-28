import React from 'react';
import styles from '../styles/header/header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';
import { Grid, Hidden } from '@material-ui/core';

const Header = () => {
  return (
    <Grid container className={styles.header}>
      <Grid item xs={12} md={7}>
        <p className={styles.title}>Covid 19 Tracker - Sockan Academy</p>
      </Grid>
      <Grid item xs={12} md={5} container>
      <Grid item xs={6} md={5} className={styles.icons}>
        <FontAwesomeIcon icon={faSearch} className={styles.headerIcons} />
        <FontAwesomeIcon icon={faBell} className={styles.headerIcons} />
      </Grid>
      <Grid item xs={6} md={7} className={styles.profileDetails}>
        {/* <Hidden smDown> */}
        <p classNam={styles.name}>Jonas sawimbey</p>
        {/* </Hidden> */}
        <img src="propic.png" className={styles.avatar} />
      </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;