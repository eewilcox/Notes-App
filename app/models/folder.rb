class Folder < ApplicationRecord
  has_many :notes

  validates :name, presence: true
  validates :name, length: { minimum: 1 }
end
