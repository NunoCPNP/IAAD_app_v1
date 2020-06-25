export const url = (route) => {
  if (process.env.NODE_ENV === 'development') {
    return `http://localhost:5000/${route}`
  } else {
    return `https://iaadapiv1.herokuapp.com/${route}`
  }
}
