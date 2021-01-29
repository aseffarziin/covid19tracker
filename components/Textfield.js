import React from 'react'
import { TextField } from '@material-ui/core';

const Textfield = ({ ...props }) => {
  const style = {
    margin: '5px auto',
  }
  return (
    <>
    <TextField type='text' size='small' variant='outlined' {...props} style={style} required />
    </>
  )
}

export default Textfield