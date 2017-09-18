import { connect } from 'react-redux';

import PokemonDetail from './pokemon_detail';
import { requestOnePokemon } from '../../actions/pokemon_actions';
// import {selectOnePokemon} from '../../reducers/selectors';

const mapStateToProps = state => {
  console.log("state",state);
  const pokemon = state.entities.pokemon[state.ui.currentPokemon] ? state.entities.pokemon[state.ui.currentPokemon] : null
  // return { pokemon: selectOnePokemon(state)};
  return {pokemon};
};

const mapDispatchToProps = dispatch => {
  return {
    requestOnePokemon: (id) => dispatch(requestOnePokemon(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
