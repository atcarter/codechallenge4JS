class AddForeignKeKeyToArt < ActiveRecord::Migration[6.1]
  def change
    add_column :arts, :category_id, :integer
  end
end
