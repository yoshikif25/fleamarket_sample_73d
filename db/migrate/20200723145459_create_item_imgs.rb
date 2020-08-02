class CreateItemImgs < ActiveRecord::Migration[5.2]
  def change
  create_table :item_imgs do |t|
  t.references :item, type: :bigint, foreign_key: true
  t.string :url, null: false
  t.timestamps
  end
end
end