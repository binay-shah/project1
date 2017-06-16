class BrandCategoriesController < ApplicationController
  before_action :set_brand_category, only: [:show, :update, :destroy]

  # GET /brand_categories
  # GET /brand_categories.json
  def index
    @brand_categories = BrandCategory.all

    render json: @brand_categories
  end

  # GET /brand_categories/1
  # GET /brand_categories/1.json
  def show
    render json: @brand_category
  end

  # POST /brand_categories
  # POST /brand_categories.json
  def create
    @brand_category = BrandCategory.new(brand_category_params)

    if @brand_category.save
      render json: @brand_category, status: :created, location: @brand_category
    else
      render json: @brand_category.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /brand_categories/1
  # PATCH/PUT /brand_categories/1.json
  def update
    if @brand_category.update(brand_category_params)
      head :no_content
    else
      render json: @brand_category.errors, status: :unprocessable_entity
    end
  end

  # DELETE /brand_categories/1
  # DELETE /brand_categories/1.json
  def destroy
    @brand_category.destroy

    head :no_content
  end

  private

    def set_brand_category
      @brand_category = BrandCategory.find(params[:id])
    end

    def brand_category_params
      params.require(:brand_category).permit(:category_id, :brand_id)
    end
end
