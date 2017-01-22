class Api::V1::NotesController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    @notes = Note.all
    render json: @notes
  end
end
