import { makeId } from '../helpers'

const initialState = {
  enemies: [
    {
      id: makeId(),
      pos: [0, 0],
      dir: 'down',
      animation: 0,
      level:5,
      name:'City punk'
    }
  ]
}

const reducer = (state = initialState, action) => {

  switch (action.type) {

    default:
      return {...state}
  }
}

export default reducer