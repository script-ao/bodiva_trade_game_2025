import React from "react";

function Label(props) {
  const { text } = props;
  return (
    <React.Fragment>
      <div className="label_wrapper">
        <div className="label-container">
          <span>{text}</span>
        </div>
      </div>
    </React.Fragment>
  );
}

export { Label };
