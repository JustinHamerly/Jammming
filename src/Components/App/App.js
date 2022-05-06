import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import { useState } from 'react';

function App(props) {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [playlistTracks, setplaylistTracks] = useState([]);

  const addTrack = (track) => {
    if(!playlistTracks.includes(track.id)){
      setplaylistTracks([...playlistTracks, track.id])
    }
  }

  const removeTrack = (track) => {
    setplaylistTracks(playlistTracks.filter(x => x === track.id))
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults 
            searchResults={searchResults} 
            onAdd={addTrack}
          />
          <Playlist 
            playlistName={playlistName} 
            playlistTracks={playlistTracks} 
            onRemove={removeTrack}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
