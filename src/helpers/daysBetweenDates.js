export const daysBetweenDates = (thisTime, prevTime) => {
  const diff = thisTime.getTime() - prevTime.getTime()
  const value = diff / (1000 * 60 * 60 * 24)
  return value.toFixed()
}
