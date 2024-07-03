import {FC, useEffect, useRef, useState} from "react";
import "./inputBlock.css";
import {downloadPost} from "../../api/api";
import {usePostList} from "../../hooks/usePostLIst";
import {eventBus} from "../../App";

export const InputBlockView: FC = () => {

  const [inputValue, setInputValue] = useState("");
  const {reload} = usePostList()

  let inputFocus = useRef(null)

  useEffect(() => {
    inputFocus.current.focus();
  }, [inputFocus])

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
      <button className="button-post" onClick={()  => {
        // @ts-ignore
        new Promise(async (resolve) => {
           await downloadPost({
              name: inputValue,
              owner: "my todo",
              done: false,
          })
          setInputValue("")
          eventBus.emit("reload list")
          resolve()
        })

      }}>+</button>
    </div>
  );
};
