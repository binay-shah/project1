class Category < ActiveRecord::Base
  has_many :subcategories, :class_name => "Category", :foreign_key => "parent_id", :dependent => :destroy
  belongs_to :parent_category, :class_name => "Category"	
  
  has_many :brand_categories, inverse_of: :category, dependent: :destroy
  has_many :brands, through: :brand_categories
  has_many :ads

  scope :categories, -> { where(parent_id:nil)}

  def self.get_categoryHierarchy(id, str)
  	if(id.nil?)  		
  		return "";
  	else
  	  	cat = Category.find(id)
  	  	id= cat.parent_id
  	  	str = get_categoryHierarchy(id, str) 
  	  	str +=  cat.name + ">>"				
  	end  		
  end 

  def self.get_arr(id, arr=[])
    if(id.nil?)     
      return 
    else
        cat = Category.find(id)
        id= cat.parent_id
        get_arr(id, arr) 
        arr << cat.name      
    end
    arr     
  end 

end
