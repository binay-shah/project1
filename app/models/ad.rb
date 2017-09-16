class Ad < ActiveRecord::Base
  belongs_to :brand
  belongs_to :category
  belongs_to :city 
  has_many :images, dependent: :destroy
  accepts_nested_attributes_for :images
  belongs_to :user
  acts_as_mappable 
  before_validation :geocode_address, :on => :create

  composed_of :position,
              class_name:"Point",
              allow_nil: true,
              mapping: [%w(lng lng), %w(lat lat)]

  def to_lat_lng
    Geokit::LatLng.new(lat,lng)
  end

  private
  def geocode_address
    geo=Geokit::Geocoders::MultiGeocoder.geocode (address||', '||city)
    errors.add(:address, "Could not Geocode address") if !geo.success
    self.lat, self.lng = geo.lat,geo.lng if geo.success
  end
end


Point.class_eval do
  def to_lat_lng
    Geokit::LatLng.new(*latlng)
  end
end