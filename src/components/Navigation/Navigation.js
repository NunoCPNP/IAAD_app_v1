import React, { useContext } from 'react'

import { controllersContext } from '../../context/controllers/context'

import { makeStyles } from '@material-ui/core/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Fab from '@material-ui/core/Fab'
import MenuIcon from '@material-ui/icons/Menu'
import AddIcon from '@material-ui/icons/Add'

import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles(() => ({
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}))

const Navigation = () => {
  const { dispatch } = useContext(controllersContext)
  const classes = useStyles()

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="open drawer">
          <MenuIcon onClick={() => dispatch({ type: 'TOGGLE_MENU' })} />
        </IconButton>
        <Fab color="secondary" aria-label="add" className={classes.fabButton}>
          <AddIcon />
        </Fab>
        <div className={classes.grow} />
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation
