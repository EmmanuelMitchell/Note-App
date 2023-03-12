import React from "react";

const Note = ({ id, text, date, handleDelet }) => {
  return (
    <div className="note">
      <span className="my-text"> {text} </span>

      <div className="note-footer">
        <small>{date}</small>
        <button onClick={() => handleDelet(id)} className="btn-delet">
          ❌
        </button>
      </div>
    </div>
  );
};

export default Note;
