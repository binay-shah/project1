class Brand < ActiveRecord::Base
	has_many :brand_categories, inverse_of: :brand, dependent: :destroy
	has_many :categories, through: :brand_categories
end
