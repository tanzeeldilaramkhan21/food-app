import React from 'react'

function Searchbar() {
  return (
    <div className='search-bar'>
        <input className='input' type="text" placeholder='Search for food...'/>
        <button className='searchbutton'>Search</button>
</div>
  )
}

export default Searchbar;
