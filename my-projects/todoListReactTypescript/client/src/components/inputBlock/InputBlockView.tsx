import {FC, useEffect, useRef, useState, } from "react";
import "./inputBlock.css";
import {downloadPost} from "../../api/api";
import {eventBus, queryClient} from "../../App";
import {IPost} from "../../types/types";
import {useMutation} from "@tanstack/react-query";
import {FormEventHandler} from "react";

interface InputViewProps {
  owner: string;
  stateStorageApp: boolean;
}

export const InputBlockView: FC<InputViewProps> = ({ owner, stateStorageApp }) => {
  const [inputValue, setInputValue] = useState("");

  const postMutation = useMutation({
    mutationFn: () =>  downloadPost({
      name: inputValue,
      owner: owner,
      done: false,
    }),
    onSuccess:  () => {
      queryClient.invalidateQueries({queryKey: ["get", "list"]})
    }
  }, queryClient)

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

  function clearInputValue() {
    setInputValue('');
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) =>{
    e.preventDefault()

    if (stateStorageApp) {
      postMutation.mutate();
      eventBus.on("clear input value", clearInputValue)
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
        eventBus.emit("reload local list")
      }
    }
  }

  return (
    <form className="inner-block" onSubmit={handleSubmit}>
      <input
        className="input"
        ref={inputFocus}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
      />
      <button type="submit"
        className="button-post">+
      </button>
    </form>
  );
};
