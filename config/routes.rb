Rails.application.routes.draw do
  resources :images, except: [:new, :edit]
	defaults format: :json do 
  resources :ad_categories, except: [:new, :edit]
  resources :ads, except: [:new, :edit]
  resources :brand_categories, except: [:new, :edit]
  resources :brands, except: [:new, :edit]
  resources :categories, except: [:new, :edit]

end
  mount_devise_token_auth_for 'User', at: 'auth'
  get '/ui'  => 'ui#index'
  get '/ui#' => 'ui#index'
  root "ui#index"
end
