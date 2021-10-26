import React, { useState } from 'react';
import axios from 'axios';

import Counter from '../counter/Counter';
import Button from '../button/Button';
import jsonplaceholder from '../../apis/jsonplaceholder';
import Resources from '../resources/Resources';
import SearchBar from '../searchBar/SearchBar';

export const App = () => {
  const [resources, setResources] = useState([]);
  const [images, setImages] = useState([]);
  const onSearchSubmit = async (term: string) => {
    try {
      const params = {
        key: '24045155-662d84a420de2f3cb979e6fa8',
        q: term,
      };
      const response: any = await axios.get('https://pixabay.com/api', {
        params,
      });
      console.log(response);
      setImages(response.data.hits);
      if (response.data.total === 0) {
        window.alert('検索結果 : 0');
      }
    } catch {
      window.alert('取得失敗');
    }
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
