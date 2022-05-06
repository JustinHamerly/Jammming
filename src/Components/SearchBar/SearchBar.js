import React from 'react';
import './SearchBar.css'

const SearchBar = (props) => {

  const handleTermChange = (e) => {
    const term = e.target.value
    props.search(term)
  }

  return (
    <div className="SearchBar">
      <input 
        placeholder="Enter A Song, Album, or Artist"
        onChange={handleTermChange} 
      />
      <button className="SearchButton">SEARCH</button>
    </div>
  )
}

export default SearchBar