import {FC} from 'react';
import "./App.css";
import {QueryClient} from "@tanstack/react-query";
import {Login} from "./components/LogIn/Login";
import EventBus from "js-event-bus";

export const eventBus = new EventBus();
export const queryClient = new QueryClient()

export const App: FC = () => {

  return (
      <div className="app">
        <Login/>
      </div>
  );
}
