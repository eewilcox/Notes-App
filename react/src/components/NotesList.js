import React, { Component } from 'react';
import Note from "./Note";
import NoteForm from "./NoteForm";

class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNoteId: null,
    };


  this.handleNoteClick = this.handleNoteClick.bind(this);
  this.handleUpdate = this.handleUpdate.bind(this);
  this.handleDelete = this.handleDelete.bind(this);

  }

  handleNoteClick(id) {
    this.setState({selectedNoteId: id});
  }


  handleUpdate() {alert("note updated");}
  handleDelete() {alert("note deleted");}



  render() {

    let notes;
    if (this.props.notesData.notes) {

      notes = this.props.notesData.notes.map(note => {

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
    if (this.props.notesData.notes) {
      notesBody = this.props.notesData.notes.map(note => {
        if (this.state.selectedNoteId == note.id) {

          return(
            <NoteForm
            key={note.id}
            id={note.id}
            body={note.body}
            timestamp={note.updated_at}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
            />
          )
        }
      })
    }

    return(
      <div className="column small-9">
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
