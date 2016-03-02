class FacebookController < ApplicationController
  skip_before_action :authenticate_request

  def fetch
    access_token = params['accessToken']
    provider = 'facebook'
    begin
      fb_user = FbGraph2::User.me(access_token).fetch(
          fields: 'email,name,first_name,last_name,age_range,link,gender,locale,picture,timezone,updated_time,verified'
      )
    rescue => the_error
      @error = the_error.message
      puts "Error #{the_error.message}"
    end

    if fb_user && fb_user.email
      user = User.from_oauth2(fb_user, provider)
    end
    sign_in_and_redirect user, event: :authentication
  end
end