class Note < ApplicationRecord
  belongs_to :folder

  validates :body, presence: true
  validates :body, length: { minimum: 1 }
end
