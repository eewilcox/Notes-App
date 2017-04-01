import React, { Component } from 'react';
import Folder from "./Folder";
import NotesList from "./NotesList";

class FolderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {

    let folders;
    if (this.props.folderData) {
      folders = this.props.folderData.map(folder => {
        let handleFolderClick = () => {
          this.props.handleFolderClick(folder.id);
        };

        let handleDeleteFolder = () => {
          this.props.handleDeleteFolder(folder.id);
        };

        let className;
        if (this.props.selectedFolderId == folder.id) {
          className = "selected";
        }

        return(
            <div>
              <Folder
              key={folder.id}
              id={folder.id}
              name={folder.name}
              handleFolderClick={handleFolderClick}
              handleDeleteFolder={handleDeleteFolder}
              selectedFolderId={this.props.selectedFolderId}
              className={className}
              />
            </div>
        )
      })
    }

    return(
      <div>
        <div id="folder-names" className="columns small-3">
          {folders}
        </div>
        <div className="column small-9">
          <NotesList
            selectedFolderId={this.props.selectedFolderId}
            notesData={this.props.notesData}
            handleFolderClick={this.props.handleFolderClick}
          />
        </div>
      </div>
    )
  }
}

export default FolderList;
