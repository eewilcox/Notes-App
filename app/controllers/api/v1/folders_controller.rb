class Api::V1::FoldersController < ApplicationController
  # skip_before_filter :verify_authenticity_token

  def index
    @folders = Folder.all
    render json: @folders
  end

end
