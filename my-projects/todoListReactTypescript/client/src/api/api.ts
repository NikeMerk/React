import { IPost, PostListData } from "../types/types";
import {eventBus} from "../App";

const URL = "http://localhost:3000/api/todos/";

// @ts-ignore
export const getListData = async (): Promise<PostListData> => {
  return await fetch(URL, { method: "GET" })
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
};

export const downloadPost = async (post: IPost) => {
  return await fetch(URL, {
    method: "POST",
    body: JSON.stringify(post),
    headers: { "content-type": "application/json" },
  })
  .then(undefined => eventBus.emit("clear input value"))
};

export const changePost = async (change: boolean, id: string | number) => {
  return await fetch(URL + id, {
    method: "PATCH",
    body: JSON.stringify({ done: change }),
    headers: { "content-type": "application/json" },
  });
};

export const deletePost = async (id: string | number) => {
  return await fetch(URL + id, { method: "DELETE" });
};
