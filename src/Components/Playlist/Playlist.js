import React from 'react'
import './Playlist.css'

const Playlist = () => {
  return (
    <div className="Playlist">
      <input defaultValue={'New Playlist'}/>
      {/* <>Tracklist Component </> */}
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  )
}

export default Playlist