import {FC, useEffect, useState} from "react";
import {BallTriangle} from "react-loading-icons";
import {usePostList} from "../../hooks/usePostLIst";
import {ListView} from "./ListView";
import {eventBus} from "../../App";

export const FetchListView: FC = () => {
  const [reloading, setReloading] = useState(false)
  const {postListState, reload} = usePostList();
  const reloadFetchListVew = () => {
    reload()
  }

  useEffect(() => {
    eventBus.on("reload list", reloadFetchListVew);
    return() => {eventBus.detach("reload list", reloadFetchListVew)}
  }, [])

  useEffect(() => {
    eventBus.on("delete post", reloadFetchListVew)
    return() => {eventBus.on("delete post", reloadFetchListVew)}
  }, [])

  useEffect(() => {
    eventBus.on("change post", reloadFetchListVew)
    return() => {eventBus.on("change post", reloadFetchListVew)}
  }, [])

  const reloadingState = () => {
    setReloading(!reloading)
  }
  eventBus.on('reload', reloadingState)

  switch (postListState.status) {
    case "loading":
      return <BallTriangle />;
    case "done":
      return <ListView list={postListState.data} />;
  }
};