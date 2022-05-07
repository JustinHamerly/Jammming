let token;
const clientID = process.env.SPOTIFY_CLIENT_ID;
const redirectURI = process.env.SPOTIFY_REDIRECT_URI

const Spotify = {
  getAccessToken: () => {
    if (token){
      return token;
    }
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if(accessTokenMatch && expiresInMatch){
      token = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1])
      window.setTimeout(() => token = '', expiresIn * 1000)
      window.history.pushState('Access Token', null, '/')
      return token;
    }else{
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
      window.location = accessUrl;
    }
  },

  search: (term) => {
    const accessToken = Spotify.getAccessToken();
    return fetch(`https://api.spotify.com/vi/search?type=track&q=${term}`, 
    {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }).then(response => {
      return response.json()
    }).then(jsonResponse => {
      if(!jsonResponse.tracks){
        return []
      }
      return jsonResponse.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }))
    })
  },

  savePlaylist: (name, trackURIs) => {
    if (!name || !trackURIs.length){
      return
    }
    const accessToken = Spotify.getAccessToken();
    const headers = {
      Authorization: `Bearer ${accessToken}`
    }
    let userId;
    return fetch('https://api.spotify.com/v1/me', headers
    ).then(response => response.json()
    ).then(jsonResponse => {
      userId = jsonResponse.id
      return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({ name: name})
      }).then(response => response.json()
      ).then(jsonResponse => {
        const playlistID = jsonResponse.id
        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistID}/tracks`, {
          headers: headers,
          method: 'POST',
          body: JSON.stringify({uris: trackURIs})
        })
      })
    })
  }

}

export default Spotify