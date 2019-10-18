import React from 'react';

import AddFilmForm from './AddFilmForm.jsx';
import FilmList from './FilmList.jsx';

const Page = () => {
  return (
    <div className="d-flex">
      <div>
        <AddFilmForm />
      </div>
      <div>
        <FilmList />
      </div>
    </div>
  );
};

export default Page;
