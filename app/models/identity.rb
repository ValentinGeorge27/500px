class Identity < ActiveRecord::Base
  belongs_to :user

  def self.check_identity(oauth_user, provider, user_id)
    identity = Identity.where(user_id: user_id, provider: provider).first
    unless identity
      Identity.create!(user_id: user_id, provider: provider, access_token: oauth_user.access_token)
    end
  end

end
