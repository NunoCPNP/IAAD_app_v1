import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles'
import Student from '../../components/Student/Student'
import Loader from '../../components/Loader/Loader'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
  paper: {
    margin: '0.5rem',
  },
})

const List = () => {
  const [students, setStudents] = useState(null)
  const classes = useStyles(makeStyles)

  const getStudents = async () => {
    try {
      const response = await axios.get('https://iaadapiv1.herokuapp.com/api/v1/student')
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
          {students.map((student) => (
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
