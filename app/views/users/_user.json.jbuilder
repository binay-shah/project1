json.extract! user,  :name
json.ads user.ads  do |ad|
	json.(ad, :id, :title, :price, :description, :created_at)
	json.category ad.category.name
	json.small_image ad.images.where(:position => 1).first.image.url(:thumb)
end
