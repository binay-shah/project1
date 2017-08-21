class CreateAds < ActiveRecord::Migration
  def change
    create_table :ads do |t|
      t.string :title
      t.string :price
      t.integer :creator_id
      t.jsonb :details
      t.string :description
      t.references :brand, index: true, foreign_key: true
      t.references :category, index: true, foreign_key: true
      t.references :location, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
