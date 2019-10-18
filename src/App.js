import React from 'react';
import { HashRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './App.css';
import { reducer } from './reducer';
import Routes from './components/Routes.jsx';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes />
      </HashRouter>
    </Provider>
  );
}

export default App;
