json.extract! @pokemon, :id, :name, :attack, :defense, :image_url, :moves, :poke_type
json.items @pokemon.items do |item|
  json.id item.id
  json.name item.name
  json.pokemon_id @pokemon.id
  json.price item.price
  json.happiness item.happiness
  json.image_url item.image_url
end
