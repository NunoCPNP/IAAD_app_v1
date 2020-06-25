import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Student from '../../components/Student/Student'
import Loader from '../../components/Loader/Loader'

import { useStudent } from '../../hooks/useStudents'
import { url } from '../../helpers/url'

import { makeStyles } from '@material-ui/core/styles'

import ListSubheader from '@material-ui/core/ListSubheader'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: '0.5rem',
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
}))

const List = () => {
  const [students, setStudents] = useState(null)
  const [module2, module3] = useStudent(students)
  const classes = useStyles(makeStyles)

  const getStudents = async () => {
    try {
      const response = await axios.get(url('api/v1/student'))
      const data = response.data.data
      setStudents(data)
    } catch (e) {
      setStudents(null)
    }
  }

  useEffect(() => {
    getStudents()
  }, [])

  return (
    <>
      {students ? (
        <>
          <ListSubheader className={classes.subheader}>Module 2</ListSubheader>
          {module2.map((student) => (
            <div key={student._id}>
              <Paper className={classes.paper}>
                <Student data={student} />
              </Paper>
            </div>
          ))}

          <ListSubheader className={classes.subheader}>Module 3</ListSubheader>
          {module3.map((student) => (
            <div key={student._id}>
              <Paper className={classes.paper}>
                <Student data={student} />
              </Paper>
            </div>
          ))}
        </>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default List
