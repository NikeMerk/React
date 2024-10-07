import {apiMe} from "../../api/api";
import {useQuery} from "@tanstack/react-query";
import {queryClient} from "../../App";
import {Loader} from "../Loader";
import {AuthForm} from "../AuthForm";
import {NoteForm} from "../NoteForm";
import "./login.css";

import {UserView} from "../UserView";
import {FetchNoteListVew} from "../NotesListView/FetchNoteListVew";
import {ButtonLogout} from "../ButtonLogout/ButtonLogout";


export const Login = () => {
  const meQuery = useQuery({
    queryFn: () => apiMe(),
    queryKey: ["user", "me"],
  }, queryClient)

  switch (meQuery.status) {
    case "pending":
      return <Loader/>
    case "error":
      return <AuthForm/>
    case "success":
      return <div className="container">
        <UserView/>
        <NoteForm/>
        <FetchNoteListVew/>
        <ButtonLogout/>
      </div>

  }
}

