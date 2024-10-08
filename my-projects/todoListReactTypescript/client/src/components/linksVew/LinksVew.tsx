import { FC } from "react";
import "./linksVew.css";

interface ILinksProps {
  setStateApp: any;
}

export const LinksVew: FC<ILinksProps> = ({ setStateApp }) => {
  return (
    <nav className="nav">
      <button
        onClick={(event) => {
          setStateApp(event.target.innerText);
        }}
        className="link"
      >
        My todo
      </button>
      <button
        onClick={(event) => {
          setStateApp(event.target.innerText);
        }}
        className="link"
      >
        Todo mom
      </button>
      <button
        onClick={(event) => {
          setStateApp(event.target.innerText);
        }}
        className="link"
      >
        Dad todo
      </button>
    </nav>
  );
};
