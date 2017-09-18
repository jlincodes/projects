import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Route } from 'react-router-dom';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonIndex extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;
    return (
      <div className="Pokedex">
        <ul className="pokelist">{pokemon.map( (poke) => <PokemonIndexItem key={poke.id} pokemon={poke} />)}</ul>


        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
      </div>
    );
  }
}

export default PokemonIndex;
