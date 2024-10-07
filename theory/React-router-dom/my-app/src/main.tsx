import * as ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";

const $root = document.getElementById("root")
const root = ReactDOM.createRoot($root as HTMLElement)

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)
