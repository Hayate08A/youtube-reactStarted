import React from 'react';

const SearchBar = () => {
  const onFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log('onSubmit');
  };
  return (
    <div className='search_bar_container'>
      <form className='ui form' onSubmit={onFormSubmit}>
        <div className='field'>
          <label>Image Search</label>
          <input type='text' name='search' placeholder='' />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
