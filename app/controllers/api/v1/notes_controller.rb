class Api::V1::NotesController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
    # binding.pry
    @folder = Folder.find(params[:folder_id])
    @notes = Note.where(folder_id: @folder)

    render json: @notes
  end

  def create
    @folder = Folder.find(params[:folder_id])

    data = JSON.parse(request.body.read)
    @note = Note.new(body: data["note"]["body"])
    @note.folder = @folder
    if @note.save!
      @notes = Note.all
      render json: @Notes
    else
      render json: {message: "Did not work"}, status: 404
    end
  end

  def update
    @note = Note.find(params[:id])
    data = JSON.parse(request.body.read)
    @note.body = data["body"]
    if @note.save!
      @notes = Note.all
      render json: @Notes
    else
      render json: {message: "Did not work"}, status: 404
    end
  end

  def destroy
    data = JSON.parse(request.body.read)
    @note = Note.find(data["id"])

    if @note.delete
      @notes = Note.all
      render json: @notes
    end
  end

  # private
  #
  # def note_params
  #   params.require(:note).permit(:body)
  # end

end
