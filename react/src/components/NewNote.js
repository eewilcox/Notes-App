import React from "react";

const NewNote = (props) => {

  return(
    <div>
      <form className="row columns small-12">
        <div>
          <label  className="right">Search:</label>
        </div>
        <div>
          <input type="text" placeholder="search here"></input>
        </div>
      </form>

      <div>
        <button onClick={props.handleNoteNew} className="small-6 columns button">New Note</button>
      </div>
    </div>
  )
}

export default NewNote;
