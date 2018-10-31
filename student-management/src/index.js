import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './reducers';
import { loadState, saveState } from './localStorage';
import App from './components/App/App';

import './index.css';


const persistedState = loadState();

const store = createStore(RootReducer, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
