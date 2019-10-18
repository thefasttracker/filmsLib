import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 } from 'uuid'

import { ActionCreator } from '../reducer';
import FilmCard from './film-card/FilmCard.jsx';

const FilmList = () => {
  const filmsData = useSelector(state => state.films.sort((a, b) => b.rating - a.rating));

  console.log('filmsData', filmsData);

  const dispatch = useDispatch();

  const getFilmData = async () => {
    const response = await fetch('https://api.myjson.com/bins/f0xme');
    const myJson = await response.json();
    const moviesList = myJson.data.map(movie => {
        return {
            ...movie,
            id: v4()
        }
    });
    dispatch(ActionCreator.loadFilms(moviesList));
  };

  useEffect(() => {
    getFilmData()
  }, [])

  return (
    <>
      {filmsData.map((film) => (<FilmCard key={film.id} film={film} />))}
    </>
  );
}

export default FilmList;
