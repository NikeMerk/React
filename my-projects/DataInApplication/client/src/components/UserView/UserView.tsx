import "./UserView.css";
import {useQuery} from "@tanstack/react-query";
import {apiMe} from "../../api/api";
import {queryClient} from "../../App";
import {Loader} from "../Loader";


export const UserView = () => {
  const queryUserVewLogo = useQuery({
    queryFn: () => apiMe(),
    queryKey: ["user vew"],
  }, queryClient)

  switch (queryUserVewLogo.status) {
    case "pending":
      return <div className="user-view-load">
        < Loader/>
      </div>
    case "success":
      return (
        <div className="user-view">
          <div className="user-view__logo">
            {queryUserVewLogo.data.username.slice(0, 1).toUpperCase()}
          </div>
          <span className="user-view__name">{queryUserVewLogo.data.username}</span>
        </div>)
  }

};
