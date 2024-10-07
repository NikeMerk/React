import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './App.css'

let mainContainer = document.querySelector(".root");
let add = ReactDOM.createRoot(mainContainer);
add.render(<App />);
