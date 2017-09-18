import React from 'react';
import ReactDOM from 'react-dom';

import { postUser, postSession, deleteSession } from  './util/session_api_util';
import configureStore from './store/store';

// testing
import { receiveCurrentUser } from './actions/session_actions';
import { login, signup, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Herro</h1>, root);


  // testing
  window.postUser = postUser;
  window.postSession = postSession;
  window.deleteSession = deleteSession;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.receiveCurrentUser = receiveCurrentUser;
  window.login = login;
  window.signup = signup;
  window.logout = logout;

});
