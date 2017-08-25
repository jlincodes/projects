# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Cat.destroy_all
User.destroy_all


user = User.create!(user_name: "a", password: "password")

Cat.create!(owner: user, name: Faker::Cat.name, color: "brown", sex: "M", birth_date: Date.today, description: Faker::RuPaul.quote)
