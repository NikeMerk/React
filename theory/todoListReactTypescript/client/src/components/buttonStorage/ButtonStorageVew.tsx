import {FC} from "react";
import "./buttonStorageVew.css"



interface IButtonStorageVewProps {
  stateStorApp:boolean;
  setStateStorApp:any;
}

export const ButtonStorageVew:FC<IButtonStorageVewProps> = ({stateStorApp, setStateStorApp}) => {
  return (
    <button
      title={
        stateStorApp ?
          "Select local storage" :
          "Select server storage"
      }
      className={
      stateStorApp ?
        "btn-stor btn-stor-local" :
        "btn-stor btn-stor-server"
      }
      onClick={() => {
        setStateStorApp(!stateStorApp)
      }}
    >
    </button>
  )
}