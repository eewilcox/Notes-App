import React from 'react';

const Folder = (props) => {
  return(
    <h4 className={props.className} onClick={props.handleFolderClick}>
    {props.name}
    </h4>
  )

}

export default Folder;
