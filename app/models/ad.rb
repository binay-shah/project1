class Ad < ActiveRecord::Base
  belongs_to :brand
  belongs_to :category
  belongs_to :location
  has_many :images
end
