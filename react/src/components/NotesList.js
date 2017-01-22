import React, { Component } from 'react';
import Note from "./Note";
import NoteForm from "./NoteForm";

class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNoteId: null,
      body: "",
    };
  this.handleNoteClick = this.handleNoteClick.bind(this);
  this.handleDelete = this.handleDelete.bind(this);
  this.handleNoteUpdate = this.handleNoteUpdate.bind(this);
  this.handleBodyChange = this.handleBodyChange.bind(this);
  }

  handleBodyChange(event) {
    let newBody = event.target.value;
    this.setState({ body: newBody });
  }

  handleNoteUpdate(event) {
    event.preventDefault();
    let fetchBody = { body: this.state.body };
    let newNotes = [];
    fetch(`/api/v1/folders/${this.props.selectedFolderId}/notes/${this.state.selectedNoteId}`,
      { method: "PATCH",
      body: JSON.stringify(fetchBody) })
      .then(function(response) {
        newNotes = response.json();
        return newNotes;
      }).then((response) => this.props.handleFolderClick(this.props.selectedFolderId)
      );
  }

  handleNoteClick(id) {
    this.setState({selectedNoteId: id});
  }

  handleDelete() {alert("note deleted");}


  render() {

    let notes;
    if (this.props.notesData) {
      notes = this.props.notesData.map(note => {


        let handleNoteClick = () => {
          this.handleNoteClick(note.id);
        };

        let className;
        if (this.state.selectedNoteId == note.id) {
          className = "selected";
        }

        return(
          <Note
          key={note.id}
          id={note.id}
          body={note.body.substring(0,40)}
          timestamp={note.updated_at}
          handleNoteClick={handleNoteClick}
          className={className}
          folderId={note.folder_id}
          />
        )
      })
    }

    let notesBody;
    if (this.props.notesData) {
      notesBody = this.props.notesData.map(note => {
        if (this.state.selectedNoteId == note.id) {

          return(
            <NoteForm
            key={note.id}
            id={note.id}
            body={note.body}
            timestamp={note.updated_at}
            handleDelete={this.handleDelete}
            handleBodyChange={this.handleBodyChange}
            handleNoteUpdate={this.handleNoteUpdate}
            />
          )
        }
      })
    }

    return(
      <div className="column small-12">
        <div className="column small-6">
          {notes}
        </div>
        <div className="column small-6">
          {notesBody}
        </div>
      </div>
    )
  }
}

export default NotesList;
