import React from 'react';

const SearchBar = () => {
  return (
    <form className='ui form'>
      <div className='field'>
        <label>First Name</label>
        <input type='text' name='first-name' placeholder='First Name' />
      </div>
    </form>
  );
};

export default SearchBar;
