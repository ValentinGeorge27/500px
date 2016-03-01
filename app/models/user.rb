class User < ActiveRecord::Base
  has_many :identities

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def self.from_oauth2(oauth_user, provider)
    user = User.find_by_email(oauth_user.email)
    unless user
      user = User.new
      user.email = oauth_user.email
      user.username = oauth_user.name
      user.password = Devise.friendly_token[0,20]
      user.save!
    end
    Identity.check_identity(oauth_user, provider, user.id)

    user
  end

end
