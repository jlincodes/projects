import { RECEIVE_ONE_POKEMON } from '../actions/pokemon_actions';

const defaultState = {
  currentPokemon: null
};

const UIReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_ONE_POKEMON:
        // return action.payload.pokemon.id;
        console.log("action", action);
        return {
          currentPokemon: action.payload.id
        };
      default:
        return state;
    }
};

export default UIReducer;
