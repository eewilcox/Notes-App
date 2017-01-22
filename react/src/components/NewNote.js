import React from "react";

const NewNote = (props) => {

  return(
    <div>
      <div className="small-8 columns">
        <input id="newNote" type="text" placeholder="New Note"></input>
      </div>
      <div className="small-7 columns">
        <input onClick={props.handleNoteNew} type="submit"></input>
      </div>
    </div>
  )
}

export default NewNote;
