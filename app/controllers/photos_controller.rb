class PhotosController < ApplicationController
  before_filter :authenticate_user!, only: [:index]

  def index
    photos = F00px.get('photos?feature=popular&rpp=25')
    respond_with JSON.parse(photos.body)['photos']
  end
end
