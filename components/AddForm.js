import React, { useState } from 'react';
import styles from '../styles/patients/patients.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Textfield from './Textfield';
import { Button } from '@material-ui/core'

const AddForm = ({ show, setShow, list, setList }) => {
  const user = {
    name: '',
    city: '',
    birthday: '',
    regisDate: '',
    regisTime: '',
    infection: '',
  }
  const [newUser, setNewUser] = useState({...user})

  const submitHandler = (e) => {
    e.preventDefault();
    setList([...list, newUser]);
    setNewUser({...user});
    setShow(false);
  }
  return (
    <div className={styles.form_container}>
    <form className={styles.form} onSubmit={(e) => submitHandler(e)}>
      <p onClick={() => setShow(false)} className={styles.close_button} >
        <FontAwesomeIcon icon={faTimes} />
        </p>
      <p className={styles.titletwo}>Add Patient</p>
      <Textfield label='Name' value={newUser.name} onChange={(e) => setNewUser({...newUser, name: e.target.value})} />
      <Textfield label='Birthday' value={newUser.birthday} onChange={(e) => setNewUser({...newUser, birthday: e.target.value})} />
      <Textfield label='City' value={newUser.city} onChange={(e) => setNewUser({...newUser, city: e.target.value})} />
      <Textfield label='Registeration Date' value={newUser.regisDate} onChange={(e) => setNewUser({...newUser, regisDate: e.target.value})} />
      <Textfield label='Registeration Time' value={newUser.regisTime} onChange={(e) => setNewUser({...newUser, regisTime: e.target.value})} />
      <Textfield label='Infection Level' value={newUser.infection} onChange={(e) => setNewUser({...newUser, infection: e.target.value})} />
      <Button type='submit' variant='outlined' className={styles.sub_button}>submit</Button>
    </form>
    </div>
  )
}

export default AddForm;