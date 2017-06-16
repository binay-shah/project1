class CreateAdCategories < ActiveRecord::Migration
  def change
    create_table :ad_categories do |t|
      t.references :ad, index: true, foreign_key: true
      t.references :category, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
