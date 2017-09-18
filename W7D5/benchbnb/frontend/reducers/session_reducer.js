import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const _defaultState = {
    currentUser: null
};

export default (state = _defaultState, action) => {
  Object.freeze(state);
  let curUser = action.user || {};
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = curUser.username || null;
      console.log(currentUser);
      let newState = merge({}, state, { currentUser: currentUser });
      return newState;
    default:
      return state;
  }
};
