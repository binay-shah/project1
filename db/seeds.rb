# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

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

Brand.destroy_all

brands = Brand.create([
		{id: 1, name: 'Hyuandai'},
		{id: 2, name: 'BMW'},
		{id: 3, name: 'Sumsung'},
		{id: 4, name: 'Nokia'}

	]);

BrandCategory.destroy_all

brands_categories = BrandCategory.create([
		{brand_id: 1, category_id: 2},
		{brand_id: 2, category_id: 2},
		{brand_id: 3, category_id: 7},
		{brand_id: 4, category_id: 7}

	]);

Ad.destroy_all

ads = Ad.create([
		{id: 1, title: "Hyuandai car", description: "Hyuandai car Grans i10", brand_id: 1},
		{id: 2, title: "BMW car", description: "BMW car Ultra i10", brand_id: 2},
		{id: 3, title: "Sumsumsung phone S6", description: "Sumsumsung phone S6", brand_id: 3},
		{id: 4, title: "Nokia phone", description: "Nokia phone 2300", brand_id: 4}
	]);


AdCategory.destroy_all


ad_categories = AdCategory.create([
		{ad_id: 1, category_id: 2},
		{ad_id: 2, category_id: 2},
		{ad_id: 3, category_id: 7},
		{ad_id: 4, category_id: 7}
	]);