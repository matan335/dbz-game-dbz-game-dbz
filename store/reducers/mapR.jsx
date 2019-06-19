import store from '../store'
import PlayerService from '../../services/PlayerService'

const initialState = {
  map: [
    [0, 0, 7, 7, 7, 7, 0, 0, 0, 0, 0],
    [0, 0, 7, 7, 7, 7, 0, 0, 0, 0, 0],
    [0, 0, 7, 7, 7, 7, 0, 0, 0, 0, 0],
    [0, 0, 7, 7, 7, 7, 0, 0, 0, 0, 0],
    [0, 0, 7, 7, 7, 7, 0, 0, 0, 0, 0],
    [0, 0, 7, 7, 7, 7, 0, 0, 0, 0, 0],
    [0, 0, 7, 7, 7, 7, 0, 0, 0, 0, 0],
    [0, 0, 7, 7, 7, 7, 0, 0, 0, 0, 0],
    [0, 0, 7, 7, 7, 7, 0, 0, 0, 0, 0],
    [0, 0, 7, 7, 7, 7, 0, 0, 0, 0, 0],
    [0, 0, 7, 7, 7, 7, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 7, 0, 0, 0, 0, 0],
    [0, 0, 7, 7, 0, 7, 0, 0, 0, 0, 0],
    [0, 0, 7, 7, 0, 0, 0, 0, 0, 0, 0],
  ],
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_ENTITIES_POS':
      let map = state.map
      const { enemy } = action

      const [y, x] = enemy.pos
      map[y][x] = {id: enemy.id, value:20}
      return { ...state, map }

    case 'SET_PLAYER_POS':
      let map = state.map
      const [y, x] = action.pos
      map[y][x] = 1
      if (action.oldPos) {
        let [oldX, oldY] = action.oldPos
        map[oldX][oldY] = 0
      }

      return { ...state, map }
    default:
      return { ...state }
  }
}

export default reducer