import "./App.css";
import {FetchListView} from "./components/listView/FetchListView";
import {InputBlockView} from "./components/inputBlock/InputBlockView";

import EventBus from "js-event-bus";

export const eventBus = new EventBus();

export const App = () => {

  return (
    <div className="app">
      <InputBlockView />
      <FetchListView />
    </div>
  )
 }
