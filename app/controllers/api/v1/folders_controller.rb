class Api::V1::FoldersController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    @folders = Folder.all
    render json: @folders
  end

  def create
    data = JSON.parse(request.body.read)
    @folder = Folder.new(name: data["name"])
    if @folder.save!
      @folders = Folder.all
      render json: @folders
    else
      render json: {message: "Did not work"}, status: 404
    end
  end

  def destroy
  data = JSON.parse(request.body.read)
  folder = Folder.find(data["id"])
  if folder.delete
    @folders = Folder.all
    render json: @restaurants
  end
end


  # private
  #
  # def folder_params
  #   params.require(:folder).permit(:name)
  # end

end
