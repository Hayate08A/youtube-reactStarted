import React from 'react';

const SearchBar = () => {
  return (
    <div className='search_bar_container'>
      <form className='ui form'>
        <div className='field'>
          <label>First Name</label>
          <input type='text' name='first-name' placeholder='First Name' />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
