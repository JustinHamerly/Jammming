import React from 'react'
import './Playlist.css'
import TrackList from '../TrackList/TrackList'

const Playlist = (props) => {
  let isRemoval = true;
  return (
    <div className="Playlist">
      <input defaultValue={'New Playlist'}/>
      <TrackList 
        playlistTracks={props.playlistTracks} 
        onRemove={props.onRemove}
        isRemoval={isRemoval}
      />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  )
}

export default Playlist