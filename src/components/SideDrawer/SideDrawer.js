import React, { useContext } from 'react'

import { controllersContext } from '../../context/controllers/context'

import { makeStyles } from '@material-ui/core/styles'

import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import InboxIcon from '@material-ui/icons/MoveToInbox'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  list: {
    width: 250,
  },
}))

const SideDrawer = () => {
  const classes = useStyles(makeStyles)
  const { state, dispatch } = useContext(controllersContext)

  return (
    <>
      <Drawer anchor={'right'} open={state.menu} onClose={() => dispatch({ type: 'TOGGLE_MENU' })}>
        <List className={classes.list}>
          <ListItem button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Test Label" />
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}

export default SideDrawer
