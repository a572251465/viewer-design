const randomBk = (): string => {
  const getRandom = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min
  return `rgb(${getRandom(0, 255)},${getRandom(0, 255)},${getRandom(0, 255)})`
}

export default randomBk
