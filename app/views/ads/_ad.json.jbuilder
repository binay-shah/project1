json.extract! ad, :id, :title, :price,  :details, :description, :brand_id, :created_at, :category_id, :views
json.images ad.images, partial: 'images/image', as: :image
json.breadcrumb Category.get_arr(ad.category_id)
json.city ad.location.city.name
