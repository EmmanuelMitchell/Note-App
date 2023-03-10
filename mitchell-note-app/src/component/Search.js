import React from 'react'

const Search = ({ handleSearchNote }) => {
  return (
    <div className='search'>
     <input 
     onChange={(event)=>handleSearchNote(event.target.value)} 
     type='text' placeholder='search note hear' />
      
    </div>
  )
}

export default Search
