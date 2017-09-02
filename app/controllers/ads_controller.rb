class AdsController < ApplicationController
  before_action :set_ad, only: [:show, :update, :destroy]
  wrap_parameters :ad, include: ["title", "price", "details", "description", "brand_id", "category_id", "location_id"]
  before_action :authenticate_user!, only: [:create, :update, :destroy]

  
  def index
    @ads = Ad.all    
  end
  
  def show
    @ad.increment!(:views)
  end
  
  def create
    @ad = Ad.new(ad_params)
    @ad.user_id = current_user.id
    if @ad.save
      if params[:images]
        params[:images].each { |img| @ad.images.create(:image => File.new(img[:image]), :position=> img[:position])}      
      end
      render json: @ad, status: :created, location: @ad
    else
      render json: {errors:@ad.errors.messages}, status: :unprocessable_entity
    end
  end

  
  def update
    if @ad.update(ad_params)
      head :no_content
    else
      render json: {errors:@ad.errors.messages}, status: :unprocessable_entity
    end
  end

  
  def destroy
    @ad.destroy

    head :no_content
  end

  private

    def set_ad
      @ad = Ad.find(params[:id])
    end

    def ad_params
      params.require(:ad).permit(:title, :price, :details, :description, :brand_id, :category_id, :location_id, :images => [:image, :position])
    end

    
end
