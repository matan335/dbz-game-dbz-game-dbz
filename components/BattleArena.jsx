import React from 'react'
import { mapStateToProps } from '../store/helpers'
import { connect } from 'react-redux'
import BattleSlut from './battle/BattleSlut'

const BattleArena = props => {
  console.log('bArena props',props)
  const { enemy, player } = props.battleState

  return (
    <section className="battle-arena">
      <div className="enemy-battle-slut">
        <BattleSlut entity={enemy} />
      </div>
      
      <div className="player-battle-slut">
        <BattleSlut entity={player} /> 
      </div>
    </section>
  )
}

export default connect(mapStateToProps)(BattleArena)