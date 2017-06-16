class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.string :name , null:false
      t.references :parent, index: true

      t.timestamps null: false
    end
  end
end
