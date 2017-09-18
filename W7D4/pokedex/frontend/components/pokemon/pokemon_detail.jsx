import React from 'react';
import PokemonItem from './pokemon_item';

class PokemonDetail extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const id = this.props.match.params.pokemonId;
    this.props.requestOnePokemon(id);
  }

  render() {
    let name = "";
    let pokemonUrl = "";
    let pokeType = "";
    let attack = "";
    let defense = "";
    let moves = "";
    let items = "";
    if (this.props.pokemon) {
      console.log(this.props.pokemon);
      name = this.props.pokemon.name;
      pokemonUrl = this.props.pokemon.image_url;
      pokeType = this.props.pokemon.poke_type;
      attack = this.props.pokemon.attack;
      defense = this.props.pokemon.defense;
      moves = this.props.pokemon.moves;
      items = this.props.pokemon.items;
      console.log("ITEMS", this.props.pokemon.items);
    }
    // console.log("MOVES",Object.values(moves));
    return (
      <div className="display-div">
        <figure>
          <img className="display-image" src={pokemonUrl} alt={name} />
        </figure>
        <ul className="poke-details">
          <li><h2>{name}</h2></li>
          <li>Type: {pokeType}</li>
          <li>Attack: {attack}</li>
          <li>Defense: {defense}</li>
          <li>Moves: {Object.values(moves).join(", ")}</li>
        </ul>
        <ul className='items-list'>
            {this.props.pokemon ?
              items.map((item) => <PokemonItem pokemon={this.props.pokemon} item={item} />) : ""
            }
        </ul>
      </div>
    );
  }
}

export default PokemonDetail;
