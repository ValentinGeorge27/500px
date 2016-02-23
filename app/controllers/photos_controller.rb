class PhotosController < ApplicationController

  def index
    photos = F00px.get('photos?feature=popular&rpp=25')
    puts JSON.parse(photos.body)['photos']
    respond_with JSON.parse(photos.body)['photos']
  end
end
