import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from '../store/helpers'
import PlayerService from '../services/PlayerService'
import spriteSheet from '../assets/spritesSheet.json' 

const sprite = {
  height: 32,
  width: 32
}
//const spriteSheet = 'https://i.ibb.co/L9NkvJ7/815292539c39d7fae558339ce73f0142.png'

const Player = props => {
  const getSprite = () => {
    const { dir, animation } = props.playerState

    return PlayerService.getAnimationLocation(animation, dir, sprite)
  }

  return (
    <div style={props.s}  >
      <div style={{
        backgroundImage: `url(${spriteSheet.gokuPlayer})`,
        backgroundPosition: getSprite(),
        objectFit: 'contain',
        width: 27,
        height: 33,
        margin:'0 auto'
      }}></div>
    </div>
  )
}


export default connect(mapStateToProps)(Player)