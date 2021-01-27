import React from 'react';
import styles from '../styles/sidebar/sidebar.module.scss';
import { Grid } from '@material-ui/core';
import { links, accountLinks } from '../data/sidebarlinks';
import ProLink from '../components/ProLink';

const SidebarList = () => {
  return (
    <div className={styles.sidebarList}>
      {links.map((link, index) => (
        <ProLink href={link.href}>
          <Grid
            key={index}
            container
            direction="row"
            alignItems="center"
            className={styles.sidebarListItem}
          >
            <Grid item xs={1}></Grid>
            <Grid item xs={2}>
              {link.icon}
            </Grid>
            <Grid item xs={9}>
              <p>{link.title}</p>
            </Grid>
          </Grid>
        </ProLink>
      ))}
      {accountLinks.map((link, index) => (
        <ProLink href={link.href}>
          <Grid
            key={index}
            container
            direction="row"
            alignItems="center"
            className={styles.sidebarListItem}
          >
            <Grid item xs={1}></Grid>
            <Grid item xs={2}>
              {link.icon}
            </Grid>
            <Grid item xs={9}>
              <p>{link.title}</p>
            </Grid>
          </Grid>
        </ProLink>
      ))}
    </div>
  );
};

export default SidebarList;
