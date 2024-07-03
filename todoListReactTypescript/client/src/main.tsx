import * as ReactDOM from "react-dom/client";
import {App} from "./App";

const mainBlockHtml = document.getElementById("root");
const root = ReactDOM.createRoot(mainBlockHtml as HTMLElement);

root.render(<App />)