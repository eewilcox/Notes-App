Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#index'


  resources :folders, only: [:index, :create]

  namespace :api do
    namespace :v1 do
      resources :folders, only: [:index, :create, :destroy, :update]
    end
  end


end
