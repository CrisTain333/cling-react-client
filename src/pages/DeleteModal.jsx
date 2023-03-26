import React from "react";
import "../index.css"
const DeletePopup = ({ props}) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Are you sure you want to delete {props.user.Name}?</h2>
        <div className="popup-buttons">
          <button onClick={props.onCancel}>Cancel</button>
          <button onClick={props.onDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;