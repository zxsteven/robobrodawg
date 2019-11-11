import React from 'react'

const Search = ({ searchfield, searchChange }) => {
  return (
    <div className='pa2'>
      <input 
        aria-label='Search RoboDawgs'
        className='pa3 ba b--green bg-lightest-blue'
        type="search" 
        placeholder='Search..' 
        onChange={searchChange}
      />
    </div>
  )
}

export default Search