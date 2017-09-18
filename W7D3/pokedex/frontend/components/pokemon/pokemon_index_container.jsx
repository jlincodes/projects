import { connect } from 'react-redux';

import PokemonIndex from './pokemon_index';
import { requestAllPokemon } from '../../actions/pokemon_actions';
import selectAllPokemon from '../../reducers/selectors';

const mapStateToProps = state => {
  return { pokemon: selectAllPokemon(state)};
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllPokemon: () => dispatch(requestAllPokemon())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);
