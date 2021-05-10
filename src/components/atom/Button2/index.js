import React from "react";

const Button2 = ({ text, onSubmit }) => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-secondary form-control"
        onClick={onSubmit}
      >
        {text}
      </button>
    </div>
  );
};

export default Button2;