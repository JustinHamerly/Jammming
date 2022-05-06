import React from 'react'
import './SearchResults.css'
import TrackList from '../TrackList/TrackList'

const SearchResults = (props) => {
  let isRemoval = false;

  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList 
        searchResults={props.searchResults} 
        onAdd={props.onAdd} 
        isRemoval={isRemoval}
      />
    </div>
  )
}

export default SearchResults