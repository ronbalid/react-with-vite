import React from 'react'

export default function Joke(props) {
  return(
    <div>
      <h2>Setup: {props.setup}</h2>
      <p>Puchline: {props.punchline}</p>
      <hr/>
    </div>
  )
}