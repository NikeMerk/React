import React from "react";
import "./css/style.css";
import { useState, setOpen } from "react";
import Modal from "./components/Modal";

function App() {

  useState(false);

  return (
    <div className="container">
      <button className="open-modal" onClick={() => setOpen(true)}>
        open-modal
      </button>
      <Modal open={open} setOpen={setOpen} />
    </div>
  );
}
export default App;
