Rails.application.routes.draw do
  resources :ad_categories, except: [:new, :edit]
  resources :ads, except: [:new, :edit]
  resources :brand_categories, except: [:new, :edit]
  resources :brands, except: [:new, :edit]
  resources :categories, except: [:new, :edit]
  mount_devise_token_auth_for 'User', at: 'auth'
  get '/ui'  => 'ui#index'
  get '/ui#' => 'ui#index'
  root "ui#index"
end
