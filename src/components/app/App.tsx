import React, { useState } from 'react';

import Counter from '../counter/Counter';
import Button from '../button/Button';
import jsonplaceholder from '../../apis/jsonplaceholder';
import Resources from '../resources/Resources';
import SearchBar from '../searchBar/SearchBar';

export const App = () => {
  const [resources, setResources] = useState([]);
  const onSearchSubmit = (term: string) => {
    console.log(term);
  };

  const getPosts = async () => {
    try {
      const posts = await jsonplaceholder.get('/post');
      setResources(posts.data as []);
    } catch (error) {
      console.log(error);
    }
  };
  const getAlbums = async () => {
    try {
      const albums = await jsonplaceholder.get('/albums');
      setResources(albums.data as []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='ui container app_container'>
      <SearchBar onSubmit={onSearchSubmit} />
      <></>
      <Button onClick={getPosts} buttonColor='primary' title='posts' />
      <Button onClick={getAlbums} buttonColor='red' title='albums' />
      <Resources resources={resources} />
      <Counter />
    </div>
  );
};
