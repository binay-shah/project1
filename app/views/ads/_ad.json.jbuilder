json.extract! ad, :id, :title, :price, :description, :brand_id, :created_at, :updated_at
json.url ad_url(ad, format: :json)
json.images ad.images, partial: 'images/image', as: :image