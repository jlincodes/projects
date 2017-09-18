import React from 'react';
import { NavLink } from 'react-router-dom';

function PokemonIndexItem({pokemon}) {
  return (
    <li>
      <NavLink to={`/pokemon/${pokemon.id}`}>
        <span>{pokemon.id}</span>
        <img className="img-class" src={pokemon.image_url} alt={pokemon.name} />
        <span>{pokemon.name}</span>
      </NavLink>
    </li>
  );
}

export default PokemonIndexItem;
