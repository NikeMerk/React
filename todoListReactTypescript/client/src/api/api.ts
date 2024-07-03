import {IPost, PostListData} from "../types/types";

const URL = "http://localhost:3000/api/todos/";

export const getListData = (): Promise<PostListData> => {
  return fetch(URL, { method: "GET" })
    .then((response) => response.json())
    .then((response) => {
      return response;
    });
};

export const downloadPost = (post: IPost):Promise<any> => {
  console.log("down")
  return fetch(URL, {
    method: "POST",
    body: JSON.stringify(post),
    headers: { "content-type": "application/json" },
  })
}

export const changePost = async (change: boolean, id: string) => {
  return await fetch(URL + id, {
    method: "PATCH",
    body: JSON.stringify({ done: change }),
    headers: { "content-type": "application/json" },
  });
};

export const deletePost = async (id: string) => {
  return await fetch(URL + id, { method: "DELETE" });
};
