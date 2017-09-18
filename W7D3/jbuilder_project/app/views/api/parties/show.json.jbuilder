json.partial!'api/parties/party', party: @party
# json.guests @party.guests, partial: 'api/guests/guest', as: :guest
# json.gifts @party.guests, partial: 'api/guests/guest', as: :guest
json.guests @party.guests do |guest|
  json.name guest.name
  json.gifts guest.gifts, :title
end
