import React from "react";

const NoteForm = (props) => {

  let body = "Select Note";
  if (props.body) {
    body = props.body;
  }

  let glow;
  if (props.glow) {
    glow = "glow";
  }

  return(
    <div>
      <div>
        <button id="update" className={`${glow} button`} onClick={props.handleNoteUpdate}>Update</button>

        <button id="delete" className="button" onClick={props.handleDelete}>Delete</button>

        <p>Last Updated:{props.timestamp}</p>
      </div>

      <div>
        <div className="small-12 columns">
          <textarea id="editing" onChange={props.handleBodyChange} type="text" defaultValue={`${props.body}`}>
          </textarea>
        </div>
      </div>

    </div>
  )
}

export default NoteForm;
