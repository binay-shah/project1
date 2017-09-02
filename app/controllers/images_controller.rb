class ImagesController < ApplicationController
  before_action :set_ad, only: [:index, :show, :create, :destroy]  

  def index
    if !params[:position].nil?
      @images = @ad.images.filter_by_position(params[:position])    
    else
     @images = @ad.images     
    end    
  end

  def show    
     @image = @ad.images.find(params[:id]) 
  end
  
  def create
    @image = @ad.images.new(image_params)
    if @image.save
      render show: @image, status: :created, location: @image
    else
      render json: {errors:@image.errors.messages}, status: :unprocessable_entity
    end
  end  

  
  def destroy
    @image = @ad.images.find(params[:id])
    @image.destroy
    head :no_content
  end

  private

    def set_ad
      @ad = Ad.find(params[:ad_id])
    end

    def image_params
      params.require(:image).permit(:position)
    end
end
