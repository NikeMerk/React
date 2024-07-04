import {useEffect, useState} from "react";
import {getListData} from "../api/api";
import {AllStates} from "../types/types";

export const usePostList = () => {
  const [postListState, setPostListState] = useState<AllStates>({
    status: "loading",
  });

  const [listData, setListData] = useState([])

  useEffect(() => {
    getListData().then((data) => {
      setPostListState({ status: "done", data: data });
    });
  }, []);

  useEffect(() => {
    setPostListState({ status: "loading" });
  }, []);

  const reload = () => {
    setPostListState({ status: "loading" });
    getListData().then((data) => {
      setPostListState({ status: "done", data: data });
    });
  }

  return {postListState, reload};
};
