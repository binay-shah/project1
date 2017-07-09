json.array! @categories do |category|

	json.extract! category, :id, :name

	if category.subcategories.present?
		json.sub_category category.subcategories, partial: 'categories/subcategories/subcategory', as: :subcategory		
	end		

end