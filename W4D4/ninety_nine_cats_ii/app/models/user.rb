# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  user_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :user_name, presence: true, uniqueness: true
  validates :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: { message: "Password can\'t be blank" }
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  attr_reader :password

    has_many :cats,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Cats

  def self.find_by_credentials(user_name, password)
    user = User.find_by_user_name(user_name)
    if user && BCrypt::Password(user.password_digest).is_password?(password)
      return user
    else
      nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  # def is_password?(password)
  #   BCrypt::Password(user.password_digest)== (password)
  # end


  def reset_session_token
    self.session_token = nil
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end


end
