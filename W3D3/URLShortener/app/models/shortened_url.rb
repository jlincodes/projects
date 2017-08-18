class ShortenedUrl < ApplicationRecord
  validates :long_url, :short_url, :user_id, presence: true
  validates :short_url, uniqueness: true


  def self.random_code
    code = SecureRandom.urlsafe_base64
    until !ShortenedUrl.exists?(code)
      code = SecureRandom.urlsafe_base64
    end
    return code
  end

  def self.create_short_url(user_id, long_url)
    shortered_url = ShortenedUrl.random_code
    ShortenedUrl.create!(user_id: user_id, long_url: long_url, short_url: shortered_url)
  end

  belongs_to :submitter,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  has_many :visits,
  primary_key: :id,
  foreign_key: :short_url_id,
  class_name: :visit

  has_many :visitors,
  Proc.new { distinct },
  through: :visits,
  source: :user

  def num_click(shortened_url)
    visits.count
  end

  def num_uniques
    visitors.count
    # visits.select('user_id').distinct.count
  end

  def num_recent_uniques
    visitors.where( { time.now - visits.created_at < 10 })

    # visits
    #   .select('user_id')
    #   .where('created_at > ?', 10.minutes.ago)
    #   .distinct
    #   .count
  end
end
