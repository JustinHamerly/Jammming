import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import { useState } from 'react';

function App(props) {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  const [playlistTracks, setplaylistTracks] = useState([]);

  const search = (searchTerm) => {
    console.log(searchTerm);
  }

  const addTrack = (track) => {
    if(!playlistTracks.includes(track.id)){
      setplaylistTracks([...playlistTracks, track.id])
    }
  }

  const removeTrack = (track) => {
    setplaylistTracks(playlistTracks.filter(x => x === track.id))
  }

  const savePlaylist = () => {
    const trackURIs = playlistTracks
    return trackURIs;
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar 
          search={search}
        />
        <div className="App-playlist">
          <SearchResults 
            searchResults={searchResults} 
            onAdd={addTrack}
          />
          <Playlist 
            playlistName={playlistName} 
            playlistTracks={playlistTracks} 
            onRemove={removeTrack}
            onNameChange={setPlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
