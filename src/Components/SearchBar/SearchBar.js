import React, { useState } from 'react';
import './SearchBar.css'

const SearchBar = (props) => {

  const [term, setTerm] = useState('');

  const handleTermChange = (e) => {
    const searchTerm = e.target.value
    setTerm(searchTerm)
  }

  const search = () => {
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