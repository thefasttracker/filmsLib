import React from 'react';

import './Page.css';

import AddFilmForm from '../AddFilmForm.jsx';
import FilmList from '../FilmList.jsx';

const Page = () => {
  return (
    <div className="d-flex page-container">
      <div className="m-3 add-form">
        <AddFilmForm />
      </div>
      <div className="m-3 row align-items-start film-list">
        <FilmList />
      </div>
    </div>
  );
};

export default Page;
