import values from 'lodash/values';

export const selectAllPokemon = (state) => {
  return values(state.entities.pokemon);
};

// export const selectOnePokemon = (state) => {
//   console.log("ONEPOKE", state);
//   return values(state.entities.pokemon);
// };

// export default selectAllPokemon;
