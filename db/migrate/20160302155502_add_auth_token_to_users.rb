class AddAuthTokenToUsers < ActiveRecord::Migration
  def change
    add_column :users, :tokens, :string
  end
end
