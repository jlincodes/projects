import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { receiveAllPokemon, requestAllPokemon, receiveOnePokemon } from './actions/pokemon_actions';
import { configureStore } from './store/store';
import {selectAllPokemon} from './reducers/selectors';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
