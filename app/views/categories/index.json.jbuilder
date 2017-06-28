json.array! @categories do |category|

	json.extract! category, :id, :name

	json.sub_category category.subcategories do |sub_category|
		json.(sub_category, :id, :name)
		json.brands sub_category.brands do |brand|
			json.(brand, :id, :name)
		end
	end
end