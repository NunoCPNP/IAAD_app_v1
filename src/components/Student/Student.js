import PropTypes from 'prop-types'
import React from 'react'

import { daysBetweenDates } from '../../helpers/daysBetweenDates'

import { makeStyles } from '@material-ui/core/styles'
import { red, green } from '@material-ui/core/colors'

import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import TodayIcon from '@material-ui/icons/Today'
import EventBusyIcon from '@material-ui/icons/EventBusy'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  red: {
    color: theme.palette.getContrastText(red[900]),
    backgroundColor: red[900],
  },
  green: {
    color: theme.palette.getContrastText(green[900]),
    backgroundColor: green[900],
  },
}))

const Student = ({ data }) => {
  const classes = useStyles()

  return (
    <>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <ListItem className={classes.root} style={{ padding: 0 }}>
            <Avatar className={daysBetweenDates(new Date(), data.startDate) < 90 ? classes.green : classes.red}>
              {data.currentModule}
            </Avatar>
            <ListItemText primary={data.name} secondary={data.email} />
          </ListItem>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="module-starting-date">Current module starting date</InputLabel>
                <Input
                  value={data.modulesData[data.modulesData.length - 1].startDate.slice(0, 10).replace(/-/g, ' - ')}
                  disabled
                  fullWidth
                  startAdornment={
                    <InputAdornment position="start">
                      <TodayIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl
                fullWidth
                error={daysBetweenDates(new Date(), data.startDate) < 90 ? false : SVGComponentTransferFunctionElement}
              >
                <InputLabel htmlFor="time-on-module">Days on current module</InputLabel>
                <Input
                  value={daysBetweenDates(new Date(), data.startDate)}
                  disabled
                  fullWidth
                  startAdornment={
                    <InputAdornment position="start">
                      <EventBusyIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <Button fullWidth variant="outlined" size="small" color="primary" className={classes.margin}>
                  More Info
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button fullWidth variant="outlined" size="small" color="secondary" className={classes.margin}>
                  Pass Student
                </Button>
              </Grid>
            </Grid>
          </Grid>
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
    startDate: PropTypes.any,
  }),
}

export default Student
