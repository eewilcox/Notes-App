import React, { Component } from 'react';
import FolderList from "./FolderList";
import NewFolder from "./NewFolder";
import NewNote from "./NewNote";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folderData: [],
      name: "",
      notesData: [],
      selectedFolderId: null,
    };

    this.handleFolderNew = this.handleFolderNew.bind(this);
    this.handleFolderClick = this.handleFolderClick.bind(this);
    this.handleNoteNew = this.handleNoteNew.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNoteNew() {alert("note created");}

  handleNameChange(event) {
    let newName = event.target.value;
    this.setState({ name: newName });
  }

  handleFolderNew(event) {
    event.preventDefault();
    let fetchBody = { name: this.state.name };
    let newFolders = [];
    fetch('/api/v1/folders',
      { method: "POST",
      body: JSON.stringify(fetchBody) })
      .then(function(response) {
        newFolders = response.json();
        return newFolders;
      }).then((response) => this.setState({
        folderData: response,
      }));
  }

  handleFolderClick(id) {
    fetch(`http://localhost:4567/folders/${id}/notes.json`)
      .then(response => {
        if (response.ok) {
          return response;
        }
      })
      .then(response => response.json())
      .then(body => {
        let data = body;
        this.setState({ notesData: data });
        this.setState({selectedFolderId: id});
      });
  }

  componentDidMount() {
    fetch('/api/v1/folders')
      .then(response => {
        if (response.ok) {
          return response;
        }
      })
      .then(response => response.json())
      .then(body => {
        let data = body;

        this.setState({ folderData: data });
      });
  }

  render(){

    return (
      <div id="container" className="row callout column small-12">
        <div className="column small-12">
          <FolderList
            folderData={this.state.folderData}
            selectedFolderId={this.state.selectedFolderId}
            handleFolderClick={this.handleFolderClick}
            notesData={this.state.notesData}
          />
        </div>
        <NewFolder
          handleFolderNew={this.handleFolderNew}
          handleNameChange={this.handleNameChange}
        />
        <NewNote
          handleNoteNew={this.handleNoteNew}
        />
      </div>
    );
  }
};

export default App;
