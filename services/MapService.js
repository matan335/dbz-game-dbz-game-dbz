const blocksValue = 5
export const checkBouderies = (map, pos) => {
  const [x, y] = pos
  if (
    x < 0 ||
    y < 0 ||
    x > map.length - 1 ||
    y > map[0].length - 1 ||
    map[x][y] > blocksValue
  ) return true
  return false
}