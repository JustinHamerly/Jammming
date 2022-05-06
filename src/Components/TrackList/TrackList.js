import React from 'react'
import './TrackList.css'
import Track from '../Track/Track'

const TrackList = (props) => {
  return (
    <div className="TrackList">
      {
        props.searchResults &&
        props.searchResults.map(track => (
          <Track key={track.id} track={track} />
        ))
      }
    </div>
  )
}

export default TrackList