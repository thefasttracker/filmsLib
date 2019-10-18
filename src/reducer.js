const initialState = {
  auth: false,
  films: [],
};

const Actions = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  LOAD_FILMS: 'LOAD_FILMS',
  ADD_FILM: 'ADD_FILM',
  DELETE_FILM: 'DELETE_FILM',
};

const ActionCreator = {
  login: () => ({
    type: Actions.LOGIN,
    payload: true,
  }),
  loadFilms: (filmsData) => ({
    type: Actions.LOAD_FILMS,
    payload: filmsData,
  }),
  addFilm: (oldFilmsData, filmData) => ({
    type: Actions.ADD_FILM,
    payload: [...oldFilmsData, filmData],
  }),
  deleteFilm: (title) => ({
    type: Actions.DELETE_FILM,
    payload: title,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOGIN:
      return Object.assign({}, state, {
        auth: action.payload,
      });

    case Actions.LOAD_FILMS:
      return Object.assign({}, state, {
        films: action.payload,
      });

    case Actions.ADD_FILM:
      return Object.assign({}, state, {
        films: action.payload,
      });

    case Actions.DELETE_FILM: {
      const newFilms = state.films.filter(
        (film) => film.title !== action.payload,
      );

      return Object.assign({}, state, {
        films: newFilms,
      });
    }

    default:
      return Object.assign({}, state);
  }
};

export { ActionCreator, reducer, Actions };
