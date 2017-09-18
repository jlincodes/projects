import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_ONE_POKEMON = "RECEIVE_ONE_POKEMON";

export const requestAllPokemon = () => dispatch => {
	return APIUtil.fetchAllPokemon()
		.then(result => dispatch(receiveAllPokemon(result)));
};

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const requestOnePokemon = (id) => dispatch => {
	return APIUtil.fetchOnePokemon(id)
		.then(pokemon => dispatch(receiveOnePokemon(pokemon)));
};

export const receiveOnePokemon = payload => ({
  type: RECEIVE_ONE_POKEMON,
  payload
});
