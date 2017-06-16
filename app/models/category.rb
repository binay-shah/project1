class Category < ActiveRecord::Base
  has_many :subcategories, :class_name => "Category", :foreign_key => "parent_id", :dependent => :destroy
  belongs_to :parent_category, :class_name => "Category"
  
  has_many :brand_categories, inverse_of: :category, dependent: :destroy

  scope :top_categories, -> { where(parent_id:nil)}

  scope :all_subcategories, -> (category){top_categories.where(name: "#{category}").subcategories}
end
