import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, arraysEqual } from '../store/helpers'
import PlayerService from '../services/PlayerService'
import { checkBouderies } from '../services/MapService'

const Controls = props => {

  document.addEventListener('keydown', e => {
    //console.log('key pressed', e)
    e.preventDefault()

    let key = e.key
    if (typeof key === 'string' && key.includes('Arrow')) {
      key = key.replace('Arrow', '').toLowerCase()
    }
    console.log(key)
    // if (
    //   key === 'up' ||
    //   key === 'left' ||
    //   key === 'right' ||
    //   key === 'down'
    // ) movePlayer(key)
  })

  const movePlayer = dir => {

    //const dir = e.target.value
    const oldPos = props.playerState.pos
    const map = props.mapState.map
    const pos = PlayerService.getNewPos(oldPos, dir, map)
    if (arraysEqual(oldPos, pos)) return
    const slutVal = map[pos[0]][pos[1]]
    if (typeof slutVal === 'object' && slutVal.value === 20) {
      //console.log('hit enemy',slutVal, props)
      const enemy = props.entitiesState.enemies.find(en => en.id == slutVal.id)
      const player = props.playerState

      props.dispatch({
        type: 'ENTER_BATTLE',
        enemy,
        player
      })
    }
    if (!checkBouderies(map, pos)) props.dispatch({
      type: 'SET_PLAYER_POS', pos, oldPos, dir
    })

  }

  return (
    <div style={styles.container}>
      <button style={styles.btnUp}
        onClick={e => movePlayer(e.target.value)}
        value="up">up</button>

      <button style={styles.btnDown}
        onClick={e => movePlayer(e.target.value)}
        value="down">down</button>

      <button style={styles.btnLeft}
        onClick={e => movePlayer(e.target.value)}
        value="left">left</button>

      <button style={styles.btnRight}
        onClick={e => movePlayer(e.target.value)}
        value="right">right</button>
    </div>
  )
}

const styles = {
  container: {
    position: 'relative',
    width: 200,
    height: 100,
    background: '',
    margin: '0 auto'
  },
  btnUp: {
    width: 60,
    heigth: 30,
    position: 'absolute',
    top: 0,
    right: '35%'
  },
  btnDown: {
    width: 60,
    heigth: 30,
    position: 'absolute',
    bottom: 0,
    right: '35%'
  },
  btnRight: {
    width: 60,
    heigth: 30,
    position: 'absolute',
    top: '40%',
    right: 0
  },
  btnLeft: {
    width: 60,
    heigth: 30,
    position: 'absolute',
    top: '40%',
    left: 0
  }

}

export default connect(mapStateToProps)(Controls)