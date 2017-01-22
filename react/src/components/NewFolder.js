import React from "react";

  const NewFolder = (props) => {

    return(
      <div className="column small-5">
        <form>
          <div>
            <div className="small-12 columns">
              <input onChange={props.handleNameChange} name="nil" id="newFolderData" type="text" placeholder="New Folder"></input>
            </div>
            <div className="small-3 columns">
              <input onClick={props.handleFolderNew} type="submit"  id="addFolder"></input>
            </div>
          </div>
        </form>
      </div>
    )
  }
export default NewFolder;
