class CreateIdentities < ActiveRecord::Migration
  def change
    create_table :identities do |t|
      t.string :provider, null: false
      t.integer :provider_id, null: false
      t.string :access_token
      t.date :expire_at
      t.integer :user_id, null: false

      t.timestamps null: false
    end
  end
end
