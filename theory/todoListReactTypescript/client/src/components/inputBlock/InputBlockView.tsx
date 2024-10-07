import { FC, useEffect, useRef, useState } from "react";
import "./inputBlock.css";
import { downloadPost } from "../../api/api";
import { eventBus } from "../../App";
import { IPost } from "../../types/types";

interface InputViewProps {
  owner: string;
  stateStorApp: boolean;
}

export const InputBlockView: FC<InputViewProps> = ({ owner, stateStorApp }) => {
  const [inputValue, setInputValue] = useState("");

  let inputFocus = useRef(null);
  let arrayObjectsLocalData: Array<object>;
  if (JSON.parse(localStorage.getItem(owner)) === null) {
    arrayObjectsLocalData = [];
  } else {
    arrayObjectsLocalData = JSON.parse(localStorage.getItem(owner));
  }

  useEffect(() => {
    inputFocus.current.focus();
  }, [inputFocus]);

  return (
    <div className="inner-block">
      <input
        className="input"
        ref={inputFocus}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
      />
      <button
        className="button-post"
        onClick={() => {
          if (stateStorApp) {
            // @ts-ignore
            new Promise(async (resolve) => {
              await downloadPost({
                name: inputValue,
                owner: owner,
                done: false,
              });
              setInputValue("");
              eventBus.emit("reload list");
              resolve();
            });
          } else {
            if (inputValue !== "") {
              const obj: IPost = {
                name: inputValue,
                owner: owner,
                done: false,
                id: crypto.randomUUID(),
              };
              setInputValue("");
              arrayObjectsLocalData.push(obj);
              localStorage.setItem(
                owner,
                JSON.stringify(arrayObjectsLocalData),
              );
              eventBus.emit("reload local list vew");
            }
          }
        }}
      >
        +
      </button>
    </div>
  );
};
