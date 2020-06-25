export const daysBetweenDates = (thisTime, prevTime) => {
  const diff = Date.parse(thisTime) - Date.parse(prevTime)
  const value = diff / (1000 * 60 * 60 * 24)
  return value.toFixed()
}
