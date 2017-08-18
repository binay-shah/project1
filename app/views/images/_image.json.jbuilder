json.extract! image, :id, :position, :ad_id, :created_at
json.url_medium image.image.url(:medium)
json.url_thumb image.image.url(:thumb)
json.url_large image.image.url(:large)