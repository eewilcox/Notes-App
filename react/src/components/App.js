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
      body: "",
      notesData: [],
      selectedFolderId: null,
    };

    this.handleFolderNew = this.handleFolderNew.bind(this);
    this.handleFolderClick = this.handleFolderClick.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleNoteNew = this.handleNoteNew.bind(this);
  }


  handleBodyChange(event) {
    let newBody = event.target.value;
    this.setState({ body: newBody });
  }

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

  // handleNoteNew(event) {
  //   event.preventDefault();
  //   let fetchBody = { body: this.state.body };
  //   let newNotes = [];
  //   fetch(`/api/v1/folders/${this.state.selectedFolderId}/notes`,
  //     { method: "POST",
  //     body: JSON.stringify(fetchBody) })
  //     .then(function(response) {
  //       newNotes = response.json();
  //       return newNotes;
  //     }).then((response) => this.setState({
  //       notesData: response,
  //     }));
  // }

  handleNoteNew(event) {
    event.preventDefault();
    let data = document.getElementById("newNote").value;

    let newData = {
      "note": {
        "body": data
      }
    };
    let newNotes = [];
    fetch(`/api/v1/folders/${this.state.selectedFolderId}/notes`,
      { method: "POST",
      body: JSON.stringify(newData) })
      .then(function(response) {
        newNotes = response.json();
        return newNotes;
      }).then((response) => this.setState({
        notesData: response,
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
        <div className="row columns small-12">
          <NewNote
            handleNoteNew={this.handleNoteNew}
            handleBodyChange={this.handleBodyChange}
          />
        </div>
        <FolderList
          folderData={this.state.folderData}
          selectedFolderId={this.state.selectedFolderId}
          handleFolderClick={this.handleFolderClick}
          notesData={this.state.notesData}
          handleBodyChange={this.handleBodyChange}
          handleNoteNew={this.handleNoteNew}
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
