import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from '../store/helpers'
import PlayerService from '../services/PlayerService'

const sprite = {
  height: 32,
  width: 32
}
const spriteSheet = 'https://i.ibb.co/L9NkvJ7/815292539c39d7fae558339ce73f0142.png'

const Player = props => {
  const getSprite = () => {
    const { dir, animation } = props.playerState

    return PlayerService.getAnimationLocation(animation, dir, sprite)
  }

  return (
    <div style={props.s}  >
      <div style={{
        backgroundImage: `url(${spriteSheet})`,
        backgroundPosition: getSprite(),
        objectFit: 'contain',
        width: 34,
        height: 37,
      }}></div>
    </div>
  )
}


export default connect(mapStateToProps)(Player)