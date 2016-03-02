class AuthToken
  def self.encode(payload)
    JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end

  def self.decode(token)
    payload = JWT.decode(token, Rails.application.secrets.secret_key_base)[0]
  rescue JWT::ExpiredSignature
    # It will raise an error if it is not a token that was generated
    # with our secret key or if the user changes the contents of the payload
    Rails.logger.info "Expired Token"
    nil
  rescue
    Rails.logger.warn "Invalid Token"
    nil
  end

  def self.generate(token_id, remember_me = false)
    exp = remember_me ? 6.months.from_now : 6.hours.from_now
    payload = { id: token_id.to_s, exp: exp.to_i }
    self.encode(payload)
  end

end