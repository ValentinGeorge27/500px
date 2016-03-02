class PhotosController < ApplicationController

  def index
    photos = F00px.get('photos?feature=popular&rpp=25')
    respond_with JSON.parse(photos.body)['photos']
  end
end
