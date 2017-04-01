import React from "react";

const NewNote = (props) => {

  return(
    <div>
      <div className="small-12 columns">
        <div id="note-bar" className="small-10 columns">
          <input id="newNote" type="text" placeholder="New Note"></input>
        </div>
        <div className="columns">
          <input onClick={props.handleNoteNew} type="submit"></input>
        </div>
      </div>
    </div>
  )
}

export default NewNote;
