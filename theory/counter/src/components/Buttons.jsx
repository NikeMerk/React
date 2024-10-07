import React from "react";

export default function Buttons(props) {
  return (
    <div className="block-button">
      <button className="button btn-dec" onClick={props.decrement}>
        -Decrement
      </button>
      <button className="button btn-inc" onClick={props.increment}>
        +Increment
      </button>
    </div>
  );
}
