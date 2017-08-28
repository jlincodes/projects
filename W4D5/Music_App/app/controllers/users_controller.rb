class UsersController < ApplicationController
# Write methods on the UsersController to allow new users to sign up.
# Users should be logged in immediately after they sign up.
  def new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json :@user
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def show
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
