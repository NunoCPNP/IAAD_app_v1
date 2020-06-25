import { useState, useEffect } from 'react'

export const useStudent = (students) => {
  const [module2, setModule2] = useState([])
  const [module3, setModule3] = useState([])

  useEffect(() => {
    if (students) {
      setModule2(students.filter((element) => element.currentModule === 2))
      setModule3(students.filter((element) => element.currentModule === 3))
    }
  }, [students])

  return [module2, module3]
}
