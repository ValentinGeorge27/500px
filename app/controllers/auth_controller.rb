class AuthController < ApplicationController
  skip_before_action :authenticate_request

  def authenticate
    user = User.find_by_credentials(params[:email], params[:password]) # you'll need to implement this
    if user
      render json: { user: user, auth_token: user.generate_auth_token }
    else
      render json: { error: 'Invalid username or password' }, status: :unauthorized
    end
  end

  def register
    user = User.new(user_params)
    if user.save
      render json: { user: user, auth_token: user.generate_auth_token }
    else
      render json: { error: 'Invalid username or password' }, status: :unauthorized
    end
  end

  private

  def user_params
    params.permit(:email, :username, :password)
  end

end
