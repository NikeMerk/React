import {FC} from "react";
import "./buttonStorageVew.css"
import {eventBus} from "../../App";

interface IButtonStorageVewProps {
  stateStorageApp:boolean;
}

export const ButtonStorageVew:FC<IButtonStorageVewProps> = ({stateStorageApp}) => {
  return (
    <button
      title={
        stateStorageApp ?
          "Select local storage" :
          "Select server storage"
      }
      className={
        stateStorageApp ?
        "btn-stor btn-stor-local" :
        "btn-stor btn-stor-server"
      }
      onClick={() => {
        eventBus.emit("change storage")
      }}
    >
    </button>
  )
}
