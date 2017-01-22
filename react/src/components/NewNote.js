import React from "react";

const NewNote = (props) => {

  return(
    <div>
      <form className="row columns small-12">
        <div>
          <label  className="right">Search Notes:</label>
        </div>
        <div>
          <input type="text" placeholder="search here"></input>
        </div>
      </form>
      <div className="small-4 columns">
        <div className="small-3 columns">
          <input onClick={props.handleNoteNew} type="submit"></input>
        </div>
        <div className="small-9 columns">
          <input id="newNote" type="text" placeholder="New Note"></input>
        </div>
      </div>
    </div>
  )
}

export default NewNote;
