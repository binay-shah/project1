Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  get '/ui'  => 'ui#index'
  get '/ui#' => 'ui#index'
  root "ui#index"
end
