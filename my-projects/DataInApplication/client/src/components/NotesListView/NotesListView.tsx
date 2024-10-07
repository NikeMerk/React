import "./NotesListView.css";
import {NoteView} from "../NoteView/NoteView";
import {FC} from "react";
import {List} from "../../types/types";


interface INoteListVewProps {
  dataList: List
}

export const NotesListView: FC<INoteListVewProps> = ({dataList}) => {

  return (
    <ul className="note-list-view">
      {dataList.length === 0 ? <span>"пока что Список пуст"</span> :
        dataList.map(obj => {
          return <li key={obj.id}>
            <NoteView obj={obj}/>
          </li>
        })
      }
    </ul>
  );

};
