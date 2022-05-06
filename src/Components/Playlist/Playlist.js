import React from 'react'
import './Playlist.css'
import TrackList from '../TrackList/TrackList'

const Playlist = (props) => {
  const isRemoval = true;

  const handleNameChange = (e) => {
    props.onNameChange(e.target.value)
  }

  return (
    <div className="Playlist">
      <input defaultValue={'New Playlist'} onChange={handleNameChange} />
      <TrackList 
        playlistTracks={props.playlistTracks} 
        onRemove={props.onRemove}
        isRemoval={isRemoval}
      />
      <button className="Playlist-save" onClick={props.onSave}>SAVE TO SPOTIFY</button>
    </div>
  )
}

export default Playlist