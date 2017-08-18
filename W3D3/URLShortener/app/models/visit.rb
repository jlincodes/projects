class Visit < ApplicationRecord
  def self.record_visit!(user_id, short_url_id)
    Visit.create!(user_id: user_id, short_url_id: short_url_id)
  end

  belongs_to :short_url,
    primary_key: :id,
    foreign_key: :short_url_id,
    class_name: :ShortenedUrl

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

end
