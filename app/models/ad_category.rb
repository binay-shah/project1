class AdCategory < ActiveRecord::Base
  belongs_to :ad
  belongs_to :category
end
