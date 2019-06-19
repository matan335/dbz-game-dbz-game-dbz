import React from 'react'
import { mapStateToProps } from './store/helpers'
import { connect } from 'react-redux'

import Map from './components/Map';
import Controls from './components/Controls';
import BattleArena from './components/BattleArena'

const App = props => {
  const {isBattleMode} = props.battleState
  return (
    <>
    {
      !isBattleMode ?
      <Map />
      :<BattleArena/>
    }
      <Controls />
    </>
  )
}


export default connect(mapStateToProps)(App)