import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

import NotesApp from './components/NotesApp.jsx';

import configureStore from './store';

import './assets/globalStyles.css';

export default function startApp(notes) {
    const store = configureStore(notes);

    ReactDOM.render(
        <Provider store={store}>
            <NotesApp />
        </Provider>,
      document.getElementById('root')
  );
}
