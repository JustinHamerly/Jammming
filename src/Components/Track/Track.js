import React from 'react'
import './Track.css'

const renderAction = (condition) => {
  return condition ? <button className="Track-action">-</button> : <button className="Track-action">+</button>
}

const Track = (props) => {

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>{props.track.artist} | {props.track.album}</p>
      </div>
      <button className="Track-action"> + or - will go here </button>
    </div>
  )
}

export default Track