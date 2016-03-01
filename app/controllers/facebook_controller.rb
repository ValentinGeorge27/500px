class FacebookController < ApplicationController
  def fetch
    access_token = params['accessToken']

    begin
      user = FbGraph2::User.me(access_token).fetch(
          fields: 'email,name,first_name,last_name,age_range,link,gender,locale,picture,timezone,updated_time,verified'
      )
    rescue => the_error
      @error = the_error.message
      puts "Error #{the_error.message}"
    end

    if user && user.email

    end
    render nothing: true
  end
end