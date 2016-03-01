class RemoveProviderIdFromIdentities < ActiveRecord::Migration
  def change
    remove_column :identities, :provider_id
  end
end
