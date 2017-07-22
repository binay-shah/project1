class Ad < ActiveRecord::Base
  belongs_to :brand
  has_many: images
end
