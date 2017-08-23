json.extract! image,  :position
json.url_medium image.image.url(:medium)
json.url_thumb image.image.url(:thumb)
json.url_large image.image.url(:large)