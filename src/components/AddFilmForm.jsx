import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 } from 'uuid';

import { ActionCreator } from '../reducer';

const AddFilmForm = () => {
  const oldFilmsData = useSelector(state => state.films);

  const [filmName, setFilmName] = useState('');
  const [year, setYear] = useState('');
  const [director, setDirector] = useState('');
  const [rating, setRating] = useState('');

  const dispatch = useDispatch();

  const handleChangeFilmName = event => {
    setFilmName(event.target.value);
  };

  const handleChangeYear = event => {
    setYear(event.target.value);
  };

  const handleChangeDirector = event => {
    setDirector(event.target.value);
  };

  const handleChangeRating = event => {
    setRating(event.target.value);
  };

  const handleSubmit = () => {
    const filmData = {
      title: filmName,
      year: Number(year),
      director,
      rating: Number(rating),
      id: v4()
    };

    setFilmName('');
    setYear('');
    setDirector('');
    setRating('');
    
    dispatch(ActionCreator.addFilm(oldFilmsData, filmData))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="filmName">Название фильма</label>
        <input
          className="form-control"
          type="text"
          id="filmName"
          placeholder="Название фильма"
          value={filmName}
          onChange={handleChangeFilmName}
          autoComplete="off"
        />
      </div>
      <div className="form-group">
        <label htmlFor="year">Год</label>
        <input
          className="form-control"
          type="number"
          id="year"
          placeholder="Год"
          value={year}
          onChange={handleChangeYear}
          autoComplete="off"
        />
      </div>
      <div className="form-group">
        <label htmlFor="director">Режиссер</label>
        <input
          className="form-control"
          type="text"
          id="director"
          placeholder="Режиссер"
          value={director}
          onChange={handleChangeDirector}
          autoComplete="off"
        />
      </div>
      <div className="form-group">
        <label htmlFor="rating">Рейтинг</label>
        <input
          className="form-control"
          type="number"
          min="0"
          max="10"
          id="rating"
          placeholder="Рейтинг"
          value={rating}
          onChange={handleChangeRating}
          autoComplete="off"
        />
      </div>
      <button type="submit" className="btn btn-primary">Добавить фильм</button>
    </form>
  );
}

export default AddFilmForm;
