export const getMinutes = (time: number) => {
  const minutes = Math.floor(time / 60)

  const currentMinutes = String(minutes).padStart(2, '0').split('')

  return currentMinutes
}

export const getSeconds = (time: number) => {
  const seconds = time % 60

  const currentSeconds = String(seconds).padStart(2, '0').split('')

  return currentSeconds
}
