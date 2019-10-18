import React from 'react';
import { useDispatch } from 'react-redux';

import './FilmCard.css';

import { ActionCreator } from '../../reducer';

const FilmCard = ({film}) => {
  const {title = '', year = '', director = '', rating = ''} = film;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(ActionCreator.deleteFilm(title))
  }

  return (
    <div className="card m-2">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{year}</p>
        <p className="card-text">{director}</p>
        <p className="card-text">{rating}</p>
      </div>
      <button type="button" className="btn btn-dark" onClick={handleClick}>Удалить</button>
    </div>
  );
}

export default FilmCard;
