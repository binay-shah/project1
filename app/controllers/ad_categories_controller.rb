class AdCategoriesController < ApplicationController
  before_action :set_ad_category, only: [:show, :update, :destroy]

  # GET /ad_categories
  # GET /ad_categories.json
  def index
    @ad_categories = AdCategory.all

    render json: @ad_categories
  end

  # GET /ad_categories/1
  # GET /ad_categories/1.json
  def show
    render json: @ad_category
  end

  # POST /ad_categories
  # POST /ad_categories.json
  def create
    @ad_category = AdCategory.new(ad_category_params)

    if @ad_category.save
      render json: @ad_category, status: :created, location: @ad_category
    else
      render json: @ad_category.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /ad_categories/1
  # PATCH/PUT /ad_categories/1.json
  def update
    if @ad_category.update(ad_category_params)
      head :no_content
    else
      render json: @ad_category.errors, status: :unprocessable_entity
    end
  end

  # DELETE /ad_categories/1
  # DELETE /ad_categories/1.json
  def destroy
    @ad_category.destroy

    head :no_content
  end

  private

    def set_ad_category
      @ad_category = AdCategory.find(params[:id])
    end

    def ad_category_params
      params.require(:ad_category).permit(:ad_id, :category_id)
    end
end
