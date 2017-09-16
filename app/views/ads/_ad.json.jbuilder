json.extract! ad, :id, :title, :price,  :details, :description, :brand_id, :created_at, :category_id, :views, :address, :position
json.images ad.images, partial: 'images/image', as: :image
json.breadcrumb Category.get_arr(ad.category_id)
json.city ad.city.name
json.user_details ad.user, partial: 'users/user', as: :user
