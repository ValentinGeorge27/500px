Rails.application.routes.draw do
  devise_for :users
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root to: 'home#index'

  post '/facebook/fetch', to: 'facebook#fetch'
  post 'auth', to: 'auth#authenticate'
  post 'register', to: 'auth#register'

  resources :photos, only: [:index]

end
