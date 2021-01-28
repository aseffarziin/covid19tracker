import React from 'react';
import styles from '../styles/patients/patients.module.scss';

const Chip = ({ children, bg }) => {
  return (
      <p style={{backgroundColor: bg}} className={styles.chip}>{children}</p>
  );
};

export default Chip;
