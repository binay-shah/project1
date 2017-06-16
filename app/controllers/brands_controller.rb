class BrandsController < ApplicationController
  before_action :set_brand, only: [:show, :update, :destroy]

  # GET /brands
  # GET /brands.json
  def index
    @brands = Brand.all

    render json: @brands
  end

  # GET /brands/1
  # GET /brands/1.json
  def show
    render json: @brand
  end

  # POST /brands
  # POST /brands.json
  def create
    @brand = Brand.new(brand_params)

    if @brand.save
      render json: @brand, status: :created, location: @brand
    else
      render json: @brand.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /brands/1
  # PATCH/PUT /brands/1.json
  def update
    if @brand.update(brand_params)
      head :no_content
    else
      render json: @brand.errors, status: :unprocessable_entity
    end
  end

  # DELETE /brands/1
  # DELETE /brands/1.json
  def destroy
    @brand.destroy

    head :no_content
  end

  private

    def set_brand
      @brand = Brand.find(params[:id])
    end

    def brand_params
      params.require(:brand).permit(:name)
    end
end
