import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import THCell from '../components/TableHeadCell';
import TTypography from './TTypography';
import styles from '../styles/patients/patients.module.scss';
import Chip from './Chip';
import { PatientsList } from '../data/patientList';
import AddButton from './AddButton'
import Textfield from './Textfield';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const select = (a) => {
  if (a === 'high') return '#F12B2C'
  else if (a === 'normal') return '#29CC97'
  else if (a === 'low') return '#FEC400'
}

const Patients = () => {
  const [show, setShow] = useState(false);
  return (
    <>
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
                <TTypography upText={p.name} downText={`Last Update ${p.lastUpdate} Ago`} />
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
    {
      show ? <AddForm show={show} setShow={setShow} /> : <AddButton onClick={() => setShow(true)} />
    }
      {/* <AddButton onClick={() => setShow(!show)} /> */}
    </>
  );
}

export default Patients;

export const AddForm = ({ show, setShow }) => {
  return (
    <div className={styles.form_container}>
    <form className={styles.form}>
      <p onClick={() => setShow(false)} className={styles.close_button} >
        <FontAwesomeIcon icon={faTimes} />
        </p>
      <p className={styles.titletwo}>Add Patient</p>
      <Textfield label='Name' />
      <Textfield label='Birthday' />
      <Textfield label='City' />
      <Textfield label='Registeration Date' />
      <Textfield label='Registeration Time' />
      <Textfield label='Infection Level' />
      <Button type='submit' variant='outlined' className={styles.sub_button}>submit</Button>
    </form>
    </div>
  )
}