import React from 'react'
import './Playlist.css'
import TrackList from '../TrackList/TrackList'

const Playlist = (props) => {
  return (
    <div className="Playlist">
      <input defaultValue={'New Playlist'}/>
      <TrackList playlistTracks={props.playlistTracks} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  )
}

export default Playlist