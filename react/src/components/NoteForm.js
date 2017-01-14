import React from "react";

const NoteForm = (props) => {

  let body = "Select Note";
  if (props.body) {
    body = props.body;
  }

  return(
    <div>
      <div>
        <button id="update" className="button" onClick={props.handleUpdate}>Update</button>
        <button id="delete" className="button" onClick={props.handleDelete}>Delete</button>
        <p>Last Updated:{props.timestamp}</p>
      </div>
      <div>
        <form>
          <textarea rows="20">
            {body}
          </textarea>
        </form>
      </div>
    </div>
  )
}

export default NoteForm;
