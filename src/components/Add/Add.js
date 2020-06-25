import React, { useState } from 'react'
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles'

import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Container from '@material-ui/core/Container'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(() => ({
  top: {
    marginTop: '1rem',
  },
}))

const Add = () => {
  const [value, setValue] = useState(false)
  const classes = useStyles(makeStyles)

  const handleChange = () => {
    setValue(!value)
  }

  return (
    <>
      <Container>
        <FormControl fullWidth>
          <TextField
            id="name"
            label="Name"
            helperText="Students first and last name"
            required
            className={classes.top}
          />
          <TextField id="email" label="Email" helperText="Students e-mail" required className={classes.top} />
        </FormControl>

        <FormControlLabel
          control={<Checkbox checked={value} onChange={handleChange} name="checkedB" color="primary" />}
          label="Returning student ?"
          className={classes.top}
        />

        {value ? (
          <FormControl fullWidth>
            <TextField
              id="module"
              label="Module"
              helperText="Module which student will start at"
              required
              className={classes.top}
            />
          </FormControl>
        ) : null}

        <Button fullWidth variant="outlined" size="small" color="secondary" className={classes.top}>
          {value ? 'Create Returning Student' : 'Create New Student'}
        </Button>
      </Container>
    </>
  )
}

export default Add
