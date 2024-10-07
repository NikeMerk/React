import {FormField} from "../FormField/FormField";
import {Button} from "../Button/Button";
import "./NoteForm.css";
import {useMutation} from "@tanstack/react-query";
import React, {FormEventHandler, useState} from "react";
import {queryClient} from "../../App";
import {apiCreateNote} from "../../api/api";

const titleErrMessage: string = "Длинна заголовка должна быть минимум 1 символ"
const textErrMessage: string = "Длинна текста должна быть минимум 10 символов"

export const NoteForm = () => {

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const [titleErrorMessage, setTitleErrorMessage] = useState("");
  const [textErrorMessage, setTextErrorMessage] = useState("");

  const handleFormCreateNote: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (title.length < 1 || text.length < 10) {
      title.length < 1 && setTitleErrorMessage(titleErrMessage)
      text.length < 10 && setTextErrorMessage(textErrMessage)
      console.log(title, text)
    } else {
      createNoteMutation.mutate()
    }

  }

  const createNoteMutation = useMutation({
    mutationFn: () => apiCreateNote(title, text),
    onSuccess() {
      queryClient.invalidateQueries({queryKey: ["get", "list"]});
    }
  }, queryClient)

  return (
      <form className="note-form" onSubmit={handleFormCreateNote}>
        {createNoteMutation.error && console.log(createNoteMutation.error)}
        <FormField label="Заголовок">
          <input type="text" onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitleErrorMessage(undefined);
            setTitle(e.target.value)
          }}/>
          {titleErrorMessage && <span className="span-error">{titleErrorMessage}</span>}
        </FormField>
        <FormField label="Текст">
          <textarea onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setTextErrorMessage(undefined);
            setText(e.target.value)
          }}/>
          {textErrorMessage && <span className="span-error">{textErrorMessage}</span>}
        </FormField>
        <Button isLoading={createNoteMutation.isPending}>Сохранить</Button>
      </form>
  );
};