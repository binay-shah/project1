class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :position
      t.references :ad, index: true, foreign_key: true
      t.attachment :image

      t.timestamps null: false
    end
  end
end
