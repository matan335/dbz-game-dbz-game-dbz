import React from 'react'

export default ({entity}) => {

  const { name, health } = entity
  return (
    <section>
      <div>name: {name}</div>
      <div>health: {health}</div>
  
    </section>
  )
}