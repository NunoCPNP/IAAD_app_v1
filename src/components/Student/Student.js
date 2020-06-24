import PropTypes from 'prop-types'
import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import Avatar from '@material-ui/core/Avatar'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(red[900]),
    backgroundColor: red[900],
  },
}))

const Student = ({ data }) => {
  const classes = useStyles()

  return (
    <>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <ListItem className={classes.root} style={{ padding: 0 }}>
            <Avatar className={classes.orange}>{data.currentModule}</Avatar>
            <ListItemText primary={data.name} secondary={data.email} />
          </ListItem>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Bla di Bla</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  )
}

Student.propTypes = {
  data: PropTypes.shape({
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    currentModule: PropTypes.number.isRequired,
  }),
}

export default Student
