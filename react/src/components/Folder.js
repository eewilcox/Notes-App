import React from 'react';

const Folder = (props) => {

  return(
    <div>
      <h5 className={props.className} onClick={props.handleFolderClick}>
      {props.name}
      </h5>
      <button id="deleteFolder" className="button" onClick={props.handleDeleteFolder}>Delete</button>
    </div>
  )

}

export default Folder;
