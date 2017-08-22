class UsersController < ApplicationController

  def index
    # render plain: "I'm in the index action!"
    render json: User.all
  end

  def show
    render json: params[:id]
    # user = User.find(params[:id])
    # if user
    #   render json: user
    # else
    #   render json: user.errors.full_messages, status: 404)
    # end
  end

  def create
    user = User.new(params[:user].permit(:name, :email))
    if user.save
      render json: user
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def update
    user = User.find(params[:id])
    if user.update(user_params)
      render json: user
    else
      render json: user.errors.full_messages, status: 422
    end
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    render json: user
  end

  private

  def user_params
    params[:user].permit(:name, :email)
  end

end
