class F00pxController < ApplicationController
  skip_before_action :authenticate_request

  def index
  end

end