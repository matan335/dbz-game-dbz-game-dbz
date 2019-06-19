const isOutOfBoundries = (x, y, dir, map) => {
  console.log({ x, y, dir, map })
  if (
    (y < 1 && dir === 'up') ||
    (y > map.length - 2 && dir === 'down') ||
    x < 0

  ) return true
  return false
}

const getNewPos = (oldPos, dir, map) => {
  const [y, x] = oldPos
  if (isOutOfBoundries(x, y, dir, map)) return oldPos
  switch (dir) {
    case 'up':
      return [y - 1, x]
    case 'down':
      return [y + 1, x]
    case 'right':
      return [y, x + 1]
    case 'left':
      return [y, x - 1]
    default:
      return [y, x]
  }
}

const getAnimationLocation = (animation, dir, sprite) => {
  const xLoc = 32
  const yLoc = 0

  switch (animation) {
    case 0:
      xLoc = sprite.width
      break
    case 1:
      xLoc = 0
      break
    case 2:
      xLoc = sprite.width * 2
  }

  switch (dir) {
    case 'up':
      yLoc = sprite.height * 3
      break

    case 'down':
      yLoc = 0
      break

    case 'right':
      yLoc = sprite.height * 2
      break

    case 'left':
      yLoc = sprite.height
      break
  }
  return `-${xLoc}px -${yLoc}px`

}

export default {
  getNewPos,
  getAnimationLocation
}