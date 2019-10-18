import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ActionCreator } from '../reducer';
import FilmCard from './film-card/FilmCard.jsx';

const FilmList = () => {
  const filmsData = useSelector(state => state.films.sort((a, b) => b.rating - a.rating));

  console.log('filmsData', filmsData);

  const dispatch = useDispatch();

  const getFilmData = async () => {
    const response = await fetch('https://api.myjson.com/bins/f0xme');
    const myJson = await response.json();
    dispatch(ActionCreator.loadFilms(myJson.data));
  };

  useEffect(() => {
    getFilmData()
  }, [])

  return (
    <>
      {filmsData.map((film, index) => (<FilmCard key={`film-card${index}`} film={film} />))}
    </>
  );
}

export default FilmList;
