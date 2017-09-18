import React from 'react';
import { NavLink } from 'react-router-dom';

function PokemonItem({pokemon, item}) {
  console.log("ITEM FILE", item);
  return (
    <li>
      <NavLink to={`/pokemon/${pokemon.id}/item/${item.id}`}>
        <img className="item-img-class" src={item.image_url} alt={item.name} />
      </NavLink>
      <div className="item-details">
        <span>{item.name}</span>
        <span>{item.price}</span>
        <span>{item.happiness}</span>
      </div>
    </li>
  );
}

export default PokemonItem;
