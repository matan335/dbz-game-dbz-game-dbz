import React from 'react'
//import Sprites from '../../assets/spritesSheet.json'

export default ({entity}) => {

  const { name, health } = entity
  //console.log(Sprites)

  return (
    <section style={{display:'flex'}}>
      <div>name: {name}</div>
      <div>health: {health}</div>
      {/*<div><img src="https://i.ibb.co/ByYbVHJ/goku-transparent-back-5.png" /></div>*/}
  
    </section>
  )
}