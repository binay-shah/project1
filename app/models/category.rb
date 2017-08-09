class Category < ActiveRecord::Base
  has_many :subcategories, :class_name => "Category", :foreign_key => "parent_id", :dependent => :destroy
  belongs_to :parent_category, :class_name => "Category"	
  
  has_many :brand_categories, inverse_of: :category, dependent: :destroy
  has_many :brands, through: :brand_categories
  has_many :ads

  scope :categories, -> { where(parent_id:nil)}

  def self.get_hierarchy(id)
  	category = Category.find(id)
  	breadcrumbs = category.name 
  	#get_hierarchy(category.parent_id)
  	#breadcrumbs
  	category[:name]
  	
  end

  
end
