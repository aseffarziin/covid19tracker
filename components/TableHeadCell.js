import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import styles from '../styles/patients/patients.module.scss';

const THCell = ({ children, ...props }) => {
  return (
    <TableCell className={styles.tableheadcell} {...props}>
      <p>{children}</p>
    </TableCell>
  );
};

export default THCell;
