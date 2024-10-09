import "./App.css";
import { FetchListView } from "./components/listView/FetchListView";
import { InputBlockView } from "./components/inputBlock/InputBlockView";
import { LinksVew } from "./components/linksVew/LinksVew";
import EventBus from "js-event-bus";
import { TitleVew } from "./components/titleVew/TitleVew";
import { useState } from "react";
import { ButtonStorageVew } from "./components/buttonStorage/ButtonStorageVew";
import { ListLocalVew } from "./components/listView/ListLocalVew";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const eventBus = new EventBus();

export const App = () => {
  const [owner, setOwner] = useState("My todo");
  const [stateStorage, setStateStorage] = useState(true);

  function changeStorage() {
    setStateStorage(!stateStorage);
  }

  eventBus.on("change storage", changeStorage)

  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <div className="header-block">
          {stateStorage ? (
            <span className={"online"}>now : online</span>
          ) : (
            <span className={"offline"}>now : offline</span>
          )}
          <LinksVew setStateApp={setOwner}/>
          <ButtonStorageVew
            stateStorageApp={stateStorage}
          />
        </div>
        <TitleVew title={owner}/>
        <InputBlockView stateStorageApp={stateStorage} owner={owner}/>
        {stateStorage ? (
          <FetchListView stateStor={stateStorage} owner={owner}/>
        ) : (
          <ListLocalVew stateStorage={stateStorage} ownerData={owner}/>
        )}
      </div>
    </QueryClientProvider>

  );
};
