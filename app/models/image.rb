class Image < ActiveRecord::Base
  belongs_to :ad
  has_attached_file :image, :styles => { :large=>"369x461>", :medium => "300x300>", :thumb => "100x100>" }
  validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
end
