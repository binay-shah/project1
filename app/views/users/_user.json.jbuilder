json.extract! user,  :name
json.ads user.ads  do |ad|
	json.(ad, :id, :title, :price, :description, :created_at)
	
end
