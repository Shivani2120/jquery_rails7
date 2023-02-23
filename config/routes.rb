Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root to: "dashbourds#index"
  get '/*path' => 'dashbourds#index'
  get "dashboard", to: "dashbourds#index"
  resources :users
  resources :books do
    collection do
      delete :bulk_delete_books
    end
  end

  namespace :api do
    namespace :v1 do
      resources :users
      get 'books/index'
      post 'books/create'
      get '/show/:id', to: 'books#show'
      delete '/destroy/:id', to: 'books#destroy'
    end
  end
end
