import { checkBouderies } from '../../services/MapService'

const initialState = {
  init: true,
  pos: [1, 1],
  dir: 'down',
  animation: 0,
  level:10,
  name:'goku',
  id:0
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_PLAYER_POS':
      let { pos, dir } = action
      const init = state.init
      if (init) init = false
      const { animation } = state
      if (!dir) dir = state.dir
      if (
        dir === state.dir &&
        !state.init
      ) {
        if (animation === 2) animation = 0
        else animation++
      }

      else if (dir !== state.dir) animation = 0
      return { ...state, pos, dir, animation, init }
    default:
      return state
  }
}

export default reducer