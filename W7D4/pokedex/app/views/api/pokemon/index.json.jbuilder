@pokemon.each do |poke|
  json.set! poke.id do
    json.extract! poke, :id, :name, :attack, :defense, :poke_type, :moves
    json.image_url asset_path(poke.image_url)
    json.items poke.items
  end
end
