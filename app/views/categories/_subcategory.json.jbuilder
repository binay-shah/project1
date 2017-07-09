subcategory.each do |sub|
	json.(sub, :id, :name)	
	if sub.subcategories.present?		
		json.sub_category sub.subcategories, partial: 'categories/subcategories/subcategory', as: :subcategory	
	end	
		json.brands subcategory.brands, partial: 'brands/brand', as: :brand					
end

