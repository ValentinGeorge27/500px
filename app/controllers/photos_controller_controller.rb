class PhotosControllerController < ApplicationController

  def index
    photos = F00px.get('photos?feature=popular&rpp=100')
    respond_to do |format|
      format.html { render action: 'index', locals: { photos: JSON.parse(photos.body) } }
    end

  end
end
