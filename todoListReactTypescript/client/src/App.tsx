import "./App.css";
import { FetchListView } from "./components/listView/FetchListView";
import { InputBlockView } from "./components/inputBlock/InputBlockView";
import { LinksVew } from "./components/linksVew/LinksVew";
import EventBus from "js-event-bus";
import { TitleVew } from "./components/titleVew/TitleVew";
import { useState } from "react";
import { ButtonStorageVew } from "./components/buttonStorage/ButtonStorageVew";
import { ListLocalVew } from "./components/listView/ListLocalVew";

export const eventBus = new EventBus();

export const App = () => {
  const [owner, setOwner] = useState("My todo");
  const [stateStor, setStateStor] = useState(true);

  return (
    <div className="app">
      <div className="header-block">
        {stateStor ? (
          <span className={"online"}>now : online</span>
        ) : (
          <span className={"offline"}>now : offline</span>
        )}
        <LinksVew stateApp={owner} setStateApp={setOwner} />
        <ButtonStorageVew
          stateStorApp={stateStor}
          setStateStorApp={setStateStor}
        />
      </div>
      <TitleVew title={owner} />
      <InputBlockView stateStorApp={stateStor} owner={owner} />
      {stateStor ? (
        <FetchListView stateStor={stateStor} owner={owner} />
      ) : (
        <ListLocalVew stateStor={stateStor} ownerData={owner} />
      )}
    </div>
  );
};
