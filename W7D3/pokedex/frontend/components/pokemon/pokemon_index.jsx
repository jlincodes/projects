import React from 'react';

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
      <div>
        <h1>Gotta Catch &#39;Em All!</h1>
        <ul>{pokemon.map( (poke) => <li>
            <img src={poke.image_url} alt={poke.name} />
            <br />
            <span>{poke.id} {poke.name}</span>
            </li>)}
          </ul>
      </div>
    );
  }
}

export default PokemonIndex;
