import React from 'react'
import { Pokemon as _Pokemon } from 'pokemon/Pokemon'

export const Pokemon = props => {
  console.log(props)
  const test = true
  // if (test) {
  //   return <div></div>
  // }

  return (
    <div id='test' style={{ height: '100%', borderRadius: 5 }}>
      {_Pokemon}
    </div>
  )
}
