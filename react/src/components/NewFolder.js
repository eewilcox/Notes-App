import React from "react";

  const NewFolder = (props) => {

    return(
      <div className="column small-3">
        <form>
          <div>
            <div>
              <input onChange={props.handleNameChange} name="nil" id="newFolderData" type="text" placeholder="New Folder"></input>
            </div>
            <div>
              <input onClick={props.handleFolderNew} type="submit"  id="addFolder"></input>
            </div>
          </div>
        </form>
      </div>
    )
  }
export default NewFolder;
