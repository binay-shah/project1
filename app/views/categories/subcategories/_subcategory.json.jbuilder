json.(subcategory, :id, :name)	
	json.(subcategory, :id, :name)	
	#if subcategory.subcategories.present?		
		json.sub_category subcategory.subcategories, partial: 'categories/subcategories/subcategory', as: :subcategory	
	#end	
json.brands subcategory.brands, partial: 'brands/brand', as: :brand					



