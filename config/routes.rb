Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root to: "dashbourds#index"
  get "dashboard", to: "dashbourds#index"
  resources :users
  resources :books do
    collection do
      delete :bulk_delete_books
    end
  end

  namespace :api do
    namespace :v1 do
      resources :books
      resources :users
    end
  end
end
