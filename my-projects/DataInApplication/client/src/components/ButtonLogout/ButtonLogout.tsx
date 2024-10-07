import {FC} from "react";
import "./ButtonLogout.css";
import {apiLogout} from "../../api/api";

const reloadPage =  () => {
  new Promise(async (resolve) : Promise<undefined> => {
    await apiLogout();
    window.location.reload();
    resolve()
  }).then(() => undefined)
};

export const ButtonLogout:FC = () => {
  return (
      <button onClick={() => reloadPage()} className="button-logout">Logout</button>
  )
}