# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
=begin
Category.destroy_all

categories = Category.create([
	{id: 1, name: 'Vehicles', parent_id: ''}, 
	{id: 2, name: 'Cars', parent_id: 1},
	{id: 3, name: 'Electronics and Home Appliances', parent_id: ''},
	{id: 4, name: 'Computer and Laptops', parent_id: 3},
	{id: 5, name: 'Washing machines', parent_id: 3},
	{id: 6, name: 'Mobiles Phones & Accessories', parent_id: ''},
	{id: 7, name: 'Mobiles Phones', parent_id: 6},
	{id: 8, name: 'Tablets', parent_id: 6},
	{id: 9, name: 'Commercials Vehicles', parent_id: 1},
	{id: 10, name: 'Properties', parent_id: ''},
	{id: 11, name: 'Properties for Rent', parent_id: 10},
	{id: 12, name: 'Properties for Sale', parent_id: 10},
	{id: 13, name: 'Apartments for Rent', parent_id: 11},
	{id: 14, name: 'Home & Garden', parent_id: ''},
	{id: 15, name: 'Fashion & Beauty', parent_id: ''},
	{id: 16, name: 'Pets', parent_id: ''},
	{id: 17, name: 'Kids & Babies', parent_id: ''},
	{id: 18, name: 'Sporting Goods & Bikes', parent_id: ''},
	{id: 19, name: 'Hobbies, Music, Art & Books', parent_id: ''},
	{id: 20, name: 'Jobs', parent_id: ''},
	{id: 21, name: 'Business & Industrial', parent_id: ''},
	{id: 22, name: 'Services', parent_id: ''}	
]);

#Brand.destroy_all

brands = Brand.create([
		{id: 1, name: 'Hyuandai'},
		{id: 2, name: 'BMW'},
		{id: 3, name: 'Sumsung'},
		{id: 4, name: 'Nokia'}

	]);

#BrandCategory.destroy_all

brands_categories = BrandCategory.create([
		{brand_id: 1, category_id: 2},
		{brand_id: 2, category_id: 2},
		{brand_id: 3, category_id: 7},
		{brand_id: 4, category_id: 7}

	]);


cities = City.create([
	{name:"Kathmandu"},
	{name:"Pokhara"},
	{name:"Lalitpur"},
	{name:"Biratnagar"},
	{name:"Birganj"},
	{name:"Dharan"},
	{name:"Bharatpur"},
	{name:"Bhim"},
	{name:"Butwal"},
	{name:"Hetauda"},
	{name:"Bhaktapur"},
	{name:"Janakpur"},
	{name:"Dhangadhi"},
	{name:"Itahari"},
	{name:"Triyuga"},
	{name:"Siddharthanagar"},
	{name:"Nepalganj"},
	{name:"Madhyapur"},
	{name:"Mechinagar"},
	{name:"Ghorahi"},
	{name:"Lekhnath"},
	{name:"Kirtipur"},
	{name:"Birendranagar"},
	{name:"Gulariya"},
	{name:"Tikapur"},
	{name:"Ratnanagar"},
	{name:"Tulsipur"},
	{name:"kalaiya"},
	{name:"Kamalamai"},
	{name:"Gorkha"},
	{name:"Damak"},
	{name:"Rajbiraj"},
	{name:"Kapilvastu"},
	{name:"Byas"},
	{name:"Lahan"},
	{name:"Putalibazar"},
	{name:"Panauti"},
	{name:"Gaur"},
	{name:"Dipayal-Silgadhi"},
	{name:"Inaruwa"},
	{name:"Siraha"},
	{name:"Ramgram"},
	{name:"Jaleswar"},
	{name:"Baglung"},
	{name:"Tansen"},
	{name:"Khandbari"},
	{name:"Bhimeshwar"},
	{name:"Dhankuta"},
	{name:"Bidur"},
	{name:"Waling"},
	{name:"Narayan"},
	{name:"Malangwa"},
	{name:"Bhadrapur"},
	{name:"Amaragadhi"},
	{name:"Dasharathchand"},
	{name:"Ilam"},
	{name:"Banepa"},
	{name:"Dhulikhel"}
]);



=end	

#Ad.destroy_all

ads = Ad.create([
		{id: 1, title: "Hyuandai car", price: "2000", user_id: "1", details: '{"Model": "Regata", "Transmission Type": "Manual", "Year": "2009", "Kilometers": "120000 to 129999"}', description: "Hyuandai car Grans i10", brand_id: 1, category_id: 2, :city_id=>1},
		{id: 2, title: "BMW car", price: "2000", user_id: "1", details: "", description: "BMW car Ultra i10", brand_id: 2, category_id: 2, :city_id=>2},
		{id: 3, title: "Sumsumsung phone S6", price: "2000", user_id: "1", details: "", description: "Sumsumsung phone S6", brand_id: 3, category_id: 3, :city_id=>3},
		{id: 4, title: "Nokia phone", price: "2000", user_id: "1", details: "", description: "Nokia phone 2300", brand_id: 4, category_id: 3, :city_id=>4},
     	{id: 5, title: "Nokia phone", price: "2000", user_id: "2", details: "", description: "Nokia phone 2300", brand_id: 4, category_id: 3, :city_id=>5},
     	{id: 6, title: "Nokia phone", price: "2000", user_id: "2", details: "", description: "Nokia phone 2300", brand_id: 4, category_id: 3, :city_id=>6},
     	{id: 7, title: "House", price: "2000", user_id: "2", details: "", description: "good House", brand_id: "", category_id: 13, :city_id=>6}
	]);


#AdCategory.destroy_all

=begin
ad_categories = AdCategory.create([
		{ad_id: 1, category_id: 2},
		{ad_id: 2, category_id: 2},
		{ad_id: 3, category_id: 7},
		{ad_id: 4, category_id: 7}
	]);
=end
#Image.destroy_all
images = Image.create([
	{position: 1, ad_id: 1, image: File.new("/Users/binay/Desktop/images/car1.jpg")},
	{position: 2, ad_id: 1, image: File.new("/Users/binay/Desktop/images/car2.jpg")},
	{position: 3, ad_id: 1, image: File.new("/Users/binay/Desktop/images/car3.jpeg")},
	{position: 4, ad_id: 1, image: File.new("/Users/binay/Desktop/images/car4.jpeg")},
	{position: 1, ad_id: 2, image: File.new("#{Rails.root}/db/images/sample.jpg")},
	{position: 1, ad_id: 3, image: File.new("#{Rails.root}/db/images/sample.jpg")},
	{position: 1, ad_id: 4, image: File.new("#{Rails.root}/db/images/sample.jpg")},
	{position: 1, ad_id: 5, image: File.new("#{Rails.root}/db/images/sample.jpg")},
	{position: 1, ad_id: 6, image: File.new("#{Rails.root}/db/images/sample.jpg")},
	{position: 1, ad_id: 7, image: File.new("#{Rails.root}/db/images/sample.jpg")}
	]);


	



