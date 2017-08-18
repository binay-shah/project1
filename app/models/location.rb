class Location < ActiveRecord::Base
  belongs_to :city
  has_many :ads

  composed_of :position,
              class_name:"Point",
              allow_nil: true,
              mapping: [%w(lng lng), %w(lat lat)]

  acts_as_mappable
  def to_lat_lng
    Geokit::LatLng.new(lat,lng)
  end

end

Point.class_eval do
  def to_lat_lng
    Geokit::LatLng.new(*latlng)
  end
end
