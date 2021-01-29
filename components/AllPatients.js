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
import AddForm from './AddForm';

const select = (a) => {
  if (a === 'high') return '#F12B2C'
  else if (a === 'normal') return '#29CC97'
  else if (a === 'low') return '#FEC400'
}

const Patients = () => {
  const [list, setList] = useState([...PatientsList])
  const [show, setShow] = useState(false);
  const deleteButton = index => {
    list.splice(index, 1)
    setList([...list]);
  }
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
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map((p, index) => (
            <TableRow key={index} style={{position: 'relative'}}>
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
              <TableCell style={{position: 'relative'}}>
                <Chip bg={select(p.infection)}>
                  {p.infection}
                </Chip>
              <FontAwesomeIcon icon={faTimes} onClick={() => deleteButton(index)} className={styles.delete_button} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    {
      show ? (<AddForm show={show} setShow={setShow} list={list} setList={setList} />
        ) : (
        <AddButton onClick={() => setShow(true)} />
        )
    }
    </>
  );
}

export default Patients;

// export const AddForm = ({ show, setShow, list, setList }) => {
//   const user = {
//     name: '',
//     city: '',
//     birthday: '',
//     regisDate: '',
//     regisTime: '',
//     infection: '',
//   }
//   const [newUser, setNewUser] = useState({...user})

//   const submitHandler = (e) => {
//     e.preventDefault();
//     setList([...list, newUser]);
//     setNewUser({...user});
//     setShow(false);
//   }
//   return (
//     <div className={styles.form_container}>
//     <form className={styles.form} onSubmit={(e) => submitHandler(e)}>
//       <p onClick={() => setShow(false)} className={styles.close_button} >
//         <FontAwesomeIcon icon={faTimes} />
//         </p>
//       <p className={styles.titletwo}>Add Patient</p>
//       <Textfield label='Name' value={newUser.name} onChange={(e) => setNewUser({...newUser, name: e.target.value})} />
//       <Textfield label='Birthday' value={newUser.birthday} onChange={(e) => setNewUser({...newUser, birthday: e.target.value})} />
//       <Textfield label='City' value={newUser.city} onChange={(e) => setNewUser({...newUser, city: e.target.value})} />
//       <Textfield label='Registeration Date' value={newUser.regisDate} onChange={(e) => setNewUser({...newUser, regisDate: e.target.value})} />
//       <Textfield label='Registeration Time' value={newUser.regisTime} onChange={(e) => setNewUser({...newUser, regisTime: e.target.value})} />
//       <Textfield label='Infection Level' value={newUser.infection} onChange={(e) => setNewUser({...newUser, infection: e.target.value})} />
//       <Button type='submit' variant='outlined' className={styles.sub_button}>submit</Button>
//     </form>
//     </div>
//   )
// }