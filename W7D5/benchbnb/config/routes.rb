Rails.application.routes.draw do

  namespace :api do
    resources :users, only: [:create], defaults: {format: :json}
    resource :session, only: [:create, :destroy], defaults: {format: :json}
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"


end
