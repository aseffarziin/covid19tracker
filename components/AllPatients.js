import React from 'react';
import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import THCell from '../components/TableHeadCell';
import TTypography from './TTypography';
import styles from '../styles/patients/patients.module.scss';
import Chip from './Chip';
import { PatientsList } from '../data/patientList';


const select = (a) => {
  if (a === 'high') return '#F12B2C'
  else if (a === 'normal') return '#29CC97'
  else if (a === 'low') return '#FEC400'
}

const Patients = () => {
  return (
    <TableContainer className={styles.huh}>
      <p className={styles.title}>All Patients</p>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <THCell>User Details</THCell>
            <THCell>Birth Details</THCell>
            <THCell>Registeration Date </THCell>
            <THCell>Infection Level</THCell>
            {/* <THCell>Protein&nbsp;(g)</THCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {PatientsList.map((p) => (
            <TableRow key={p.name}>
              <TableCell
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}
              >
                <Avatar src={p.img} style={{ marginRight: '15px' }} />
                <TTypography upText={p.name} downText={p.lastUpdate} />
              </TableCell>
              <TableCell>
                <TTypography upText={p.city} downText={p.birthday} />
              </TableCell>
              <TableCell>
                <TTypography upText={p.regisDate} downText={p.regisTime} />
              </TableCell>
              <TableCell>
                <Chip bg={select(p.infection)}>
                  {p.infection}
                </Chip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Patients;