import { RECEIVE_ALL_POKEMON, RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';

export const ItemsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ONE_POKEMON:
    console.log(action.payload);
      return action.payload.items;
    default:
      return state;
  }
};
