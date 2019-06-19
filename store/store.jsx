import { createStore, combineReducers } from 'redux'
import mapState from './reducers/mapR'
import playerState from './reducers/playerR'
import entitiesState from './reducers/entitiesR'
import battleState from './reducers/battleR'



const rootReducer = combineReducers({
  mapState, playerState,entitiesState,battleState
})

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__)

export default store