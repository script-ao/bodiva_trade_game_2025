import React from "react";

function Button({ text, className, onClick }) {
  return (
    <React.Fragment>
      <button className={className} onClick={onClick}>
        {text}
    </button>
    </React.Fragment>
  );
}

export { Button };
