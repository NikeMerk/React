
import { FC } from "react";
import "./NoteView.css";
import {Note} from "../../types/types";

const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.toLocaleString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

interface INoteViewProps {
  obj: Note
}

export const NoteView:FC<INoteViewProps> = ({obj}) => {

  return (
    <div className="note-view">
      <div className="note-view__head">
        <p className="note-view__datetime">{formatDate(Date.now())}</p>
        <p className="note-view__title">{obj.title}</p>
      </div>

      <p className="note-view__text">
        {obj.text}
      </p>
    </div>
  );
};
