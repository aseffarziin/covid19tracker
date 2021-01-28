import React from 'react'
import styles from '../styles/patients/patients.module.scss';

const TTypography = ({ upText, downText}) => {
  return (
    <div className={styles.main}>
      <p className={styles.upText}>
        {upText}
      </p>
      <p className={styles.downText}>
        {downText}
      </p>
    </div>
  )
}

export default TTypography