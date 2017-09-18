import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const _defaultState = {
  session: []
};

export default (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return merge({}, state, action.errors);
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {errors: []});
    default:
      return state;
    }
};
