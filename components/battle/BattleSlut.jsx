import React from 'react'

export default ({entity}) => {
  console.log("bSlut got",entity)
  const { name, health } = entity
  return (
    <section>
      <div>name: {name}</div>
      <div>health: {health}</div>
  
    </section>
  )
}