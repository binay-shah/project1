json.extract! location, :id, :lat, :lng
json.city location.city, partial: 'cities/city', as: :city