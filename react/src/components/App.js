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
    fetch(`/api/v1/folders/${id}/notes`)
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
      <div id="container">
        <div className="row columns small-5">
          <NewNote
            handleNoteNew={this.handleNoteNew}
          />
        </div>
        <FolderList
          folderData={this.state.folderData}
          selectedFolderId={this.state.selectedFolderId}
          handleFolderClick={this.handleFolderClick}
          notesData={this.state.notesData}
        />
        <div className="columns small-12">
          <NewFolder
            handleFolderNew={this.handleFolderNew}
            handleNameChange={this.handleNameChange}
          />
        </div>
      </div>
    );
  }
};

export default App;
