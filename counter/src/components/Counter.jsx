import React from "react";
import Buttons from "./Buttons";
import useCount from "../hooks/useState";

export default function Counter() {
  let { count, increment, decrement } = useCount(0);

  return (
    <React.Fragment>
      <h3 className="title-counter">counter</h3>
      <span className="count">{count}</span>
      <Buttons increment={increment} decrement={decrement} />
    </React.Fragment>
  );
}
