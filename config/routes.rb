Rails.application.routes.draw do
  root 'static_pages#index'

  namespace :api do
    namespace :v1 do
      resources :folders, only: [:index, :create, :destroy, :update] do
        resources :notes, only: [:index, :create, :destroy, :update]
      end
    end
  end
end
