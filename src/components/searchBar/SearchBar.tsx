import { useState } from 'react';

type TSearchBar = {
  onSubmit: (text: string) => void;
};

const SearchBar = (props: TSearchBar) => {
  const [term, setTerm] = useState('');
  const onFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    props.onSubmit(term);
  };
  return (
    <div className='search_bar_container ui segment'>
      <form className='ui form' onSubmit={onFormSubmit}>
        <div className='field'>
          <label>Image Search</label>
          <input
            type='text'
            name='search'
            placeholder=''
            value={term}
            onChange={(event) => {
              setTerm(event.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
