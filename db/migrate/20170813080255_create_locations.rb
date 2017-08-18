class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.float :lat
      t.float :lng
      t.references :city, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
