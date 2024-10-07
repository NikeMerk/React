import {FC, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {apiGetDataList} from "../../api/api";
import {queryClient} from "../../App";
import {Loader} from "../Loader";
import {NotesListView} from "./NotesListView";

export const FetchNoteListVew:FC = () => {

  const [reloadThisPage, setReloadThisPage] = useState(false);

  const queryFetchList = useQuery({
    queryFn: () => apiGetDataList(),
    queryKey: ["get", "list"]
  }, queryClient)

  switch (queryFetchList.status) {
    case "pending":
      return <Loader />
    case "error":
      return <span>
        {queryFetchList.error.message}
        <button onClick={() => {setReloadThisPage(!reloadThisPage)}} className="button-reload-list">
          Повторить загрузку списка
        </button>
      </span>
    case "success":
      return <NotesListView dataList={queryFetchList.data}/>
  }

}