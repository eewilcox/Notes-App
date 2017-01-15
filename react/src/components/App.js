import React, { Component } from 'react';
import FolderList from "./FolderList";
import NewFolder from "./NewFolder";
import NewNote from "./NewNote";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      folderData: [],
      notesData: [],
      selectedFolderId: null,
    };

    this.handleFolderNew = this.handleFolderNew.bind(this);
    this.handleFolderClick = this.handleFolderClick.bind(this);
    this.handleNoteNew = this.handleNoteNew.bind(this);
  }

  handleNoteNew() {alert("note created");}

  handleFolderNew(event) {
    let data = document.getElementById("newFolderData").value;

    let newData = {
      "folder": {
        "name": data
      }
    };

    let jsonStringData = JSON.stringify(newData);

    fetch('http://localhost:4567/folders.json', {
      method: 'post',
      body: jsonStringData
    }).then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        console.log(body);
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
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
        />
        <NewNote
          handleNoteNew={this.handleNoteNew}
        />
      </div>
    );
  }
};

export default App;
