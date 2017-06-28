class BrandCategory < ActiveRecord::Base
  belongs_to :category
  belongs_to :brand


  scope :with_brand, ->{ joins("left outer join brands on brands.id = brand_categories.brand_id")
                         .select("brand_categories.*, brands.*")}

  scope :with_name , ->{ with_brand.select("brands.name as brand_name")}

  def brand_name
  	BrandCategory.with_name
  end
end
