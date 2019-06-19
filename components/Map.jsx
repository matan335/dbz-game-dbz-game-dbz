import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps } from '../store/helpers'
import Player from './Player'
import Entity from './Entity'
import spritesSheet from '../assets/spritesSheet.json'

const Map = props => {

  useEffect(() => {
    const { pos } = props.playerState
    const { enemies } = props.entitiesState

    props.dispatch({ type: 'SET_PLAYER_POS', pos })

    enemies.forEach(enemy => {
      props.dispatch({ type: 'SET_ENTITIES_POS', enemy })
    })
  }, [])

  const getValue = value => {
    if (typeof value === 'object') value = value.value
    switch (value) {
      case 0:
        return <img style={getTdStyle()}
          src={spritesSheet.grass} />
      case 1:
        return <Player s={getTdStyle()} />
      case 20:
        return <Entity s={getTdStyle()} />

      default:
        return
    }
  }

  const getTdStyle = () => {
    const { map } = props.mapState
    const width = Math.floor(
      window.innerWidth / map[0].length - 3
    )
    const height = Math.floor(
      window.innerHeight * 0.7 / map.length
    )
    return {
      width, height, textAlign: 'center'
    }
  }

  const renderMap = () => (
    props.mapState.map.map(row => (
      <tr key={Math.random()}>
        {
          row.map(value => (
            <td style={getTdStyle()}
              key={Math.random()}>
              <div style={getTdStyle()}>
                {getValue(value)}
              </div>
            </td>
          ))
        }
      </tr>
    ))
  )

  return (
    <div>
      <table className="map">
        <tbody>
          {
            renderMap()
          }
        </tbody>
      </table>
    </div>
  )
}


export default connect(mapStateToProps)(Map)