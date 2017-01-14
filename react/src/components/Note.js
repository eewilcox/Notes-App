import React from 'react';

const Note = (props) => {
  return(
    <div id="notes" className={`callout ${props.className}`} onClick={props.handleNoteClick}>
      <p>{props.body}</p>
      <p>{props.timestamp}</p>
    </div>
  )

}
export default Note;
