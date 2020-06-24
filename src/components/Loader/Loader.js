import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
  },
}))

const Loader = () => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <CircularProgress color="secondary" />
    </div>
  )
}

export default Loader
