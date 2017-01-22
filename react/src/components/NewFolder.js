import React from "react";

  const NewFolder = (props) => {

    return(
      <div className="row column small-3 end">
        <form className="small-12 column">
          <input onChange={props.handleNameChange} name="nil" id="newFolderData" type="text" placeholder="New Folder"></input>
          <input onClick={props.handleFolderNew} type="submit"  id="addFolder"></input>
        </form>
      </div>
    )
  }
export default NewFolder;
