# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'json'
require 'rest-client'

@response = JSON.parse(RestClient.get("http://api.icndb.com/jokes"))

Joke.destroy_all 



@response["value"].each do |joke|
    Joke.create(joke: joke["joke"], category: joke["categories"][0])
end

