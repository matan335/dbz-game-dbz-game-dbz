import React from 'react'
import Sprites from '../../assets/spritesSheet.json'

export default ({entity}) => {

  const { name, health } = entity
  console.log(Sprites)

  const isSpritesAviable = true
  if (typeof(Sprites[name]) !== 'undefined') isSpritesAviable = false


  return (
    <section style={{display:'flex'}}>
      <div>name: {name}</div>
      <div>health: {health}</div>
      {/*<div><img src="https://i.ibb.co/ByYbVHJ/goku-transparent-back-5.png" /></div>*/}
  
    </section>
  )
}