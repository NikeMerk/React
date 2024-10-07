import React from "react";
import * as ReactDOMClient from "react-dom/client";

const root = ReactDOMClient.createRoot(document.getElementById("root"));

class App extends React.Component {
  render() {
    return (
      <div>
        <Header title="new Title"/>
        <button className="button">push</button>
      </div>
    );
  }
}


class Header extends React.Component {
	constructor() {
		super();
	}
  render() {
    return <h1 className="main-title">{this.title}</h1>;
  }
}

root.render(<App />);
