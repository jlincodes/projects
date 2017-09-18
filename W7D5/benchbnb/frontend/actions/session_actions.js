import { postUser, postSession, deleteSession } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "LOGIN_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

// export const logoutCurrentUser = () => ({
//   type: LOGOUT_CURRENT_USER
// });

export const signup = user => dispatch => {
  return postUser(user)
    .then(response => dispatch(receiveCurrentUser(response)));
};

export const login = user => dispatch => {
  return postSession(user)
    .then(response => dispatch(receiveCurrentUser(response)));
};

export const logout = () => dispatch => {
  return deleteSession()
    .then(response => dispatch(receiveCurrentUser(null)));
};
