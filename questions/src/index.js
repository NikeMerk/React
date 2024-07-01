import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import './App.css'

let app = ReactDOM.createRoot(document.querySelector(".root"));
app.render(<App />);