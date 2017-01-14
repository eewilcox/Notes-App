import React from "react";

const NewNote = (props) => {

  return(
    <div className="row callout">
      <button onClick={props.handleNoteNew} className="small-4 columns button">
        <i className="column fa fa-sticky-note-o"></i>
        New Note
      </button>

      <form>
        <div className="small-4 columns">
          <label  className="right">Search:</label>
        </div>
        <div className="small-8 columns">
          <input type="text" placeholder="search here"></input>
        </div>
      </form>
    </div>
  )
}

export default NewNote;
