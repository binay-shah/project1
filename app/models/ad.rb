class Ad < ActiveRecord::Base
  belongs_to :brand
  belongs_to :category, :counter_cache => true
  belongs_to :location  
  has_many :images, dependent: :destroy
  accepts_nested_attributes_for :images
  belongs_to :user
end
