class  Api::V1::UsersController < ApplicationController

    def index
       @users = User.all
       render json: @users
    end

    def show
       @user = User.find(params[:id]) 
       render json: @user
    end

    def create 
       @user = User.create(user_params)
       if @user.save
        redirect_to @user
       else
        render :new
       end 
    end 

    def update 
        @user = User.find(params[:id])
        if @user.update(user_params)
            redirect_to @user
        else
            render :edit
        end
    end

    def destroy
       @user = User.find(params[:id])
        if @user.destroy
          redirect_to @user
        end 
    end 

    private 

    def user_params 
       params.require(:user).permit(:city, :name, :contact)
    end 

end
