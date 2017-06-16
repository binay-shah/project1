class CreateAds < ActiveRecord::Migration
  def change
    create_table :ads do |t|
      t.text :title
      t.text :description
      t.references :brand, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
