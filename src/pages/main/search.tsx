import React from 'react'
import {BiSearch} from 'react-icons/bi';


const Search = () => {
  return (
    <div className="searchbar flex">
    <BiSearch className="icon"/>
    <input type="text" placeholder='Search Dashboard'/>
    </div>
  )
}

export default Search;
