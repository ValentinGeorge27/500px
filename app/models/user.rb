class User < ActiveRecord::Base
  has_many :identities

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def generate_auth_token
    payload = { user_id: self.id }
    AuthToken.encode(payload)
  end

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

  def self.find_by_credentials(email, password)
    user = User.find_for_authentication(:email => email)
    user.valid_password?(password) ? user : nil
  end

end
