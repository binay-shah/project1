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
	{id: 3, name: 'Electronics and Appliances', parent_id: ''},
	{id: 4, name: 'Computer and Laptops', parent_id: 3},
	{id: 5, name: 'Washing machines', parent_id: 3},
	{id: 6, name: 'Mobiles', parent_id: ''},
	{id: 7, name: 'Mobiles Phones', parent_id: 6},
	{id: 8, name: 'Tablets', parent_id: 6},
	{id: 9, name: 'Commercials Vehicles', parent_id: 1}
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