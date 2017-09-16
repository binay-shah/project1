class CreateAds < ActiveRecord::Migration
  def change
    create_table :ads do |t|
      t.string :title, default: ""
      t.decimal :price, default: 0.0
      t.decimal :lat
      t.decimal :lng
      t.boolean :negoitable, default: false
      t.references :user, index: true, foreign_key: true
      t.jsonb :details
      t.text :description, default: ""
      t.text :address, default: ""
      t.integer :views, default: 0
      t.references :brand, index: true, foreign_key: true
      t.references :category, index: true, foreign_key: true
      t.references :city, index: true, foreign_key: true

      t.timestamps null: false
    end
    
  end
end
