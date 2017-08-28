require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) do
  User.create!(
    username: "jules",
    password: "password123")
  end
  # model specs should test your model's validations, associations, and class scope methods (eg. User::find_by_credentials). Use shoulda-matchers to write tests for each of the validations in your user model
  describe "password encryption" do
    it "does not save passwords to the database" do
      User.create!(username: "notjules", password: "abcdef")
      user = User.find_by_username("notjules")
      expect(user.password).not_to be("abcdef")
    end

    it "encrypts the password using BCrypt" do
      expect(BCrypt::Password).to receive(:create)
      User.new(username: "notjules", password: "abcdef")
    end
  end

  it { should validate_presence_of(:username) }
  it { should validate_uniqueness_of(:username) }
  it { should validate_length_of(:password).is_at_least(6) }
  it { should have_many(:goals) }
end
