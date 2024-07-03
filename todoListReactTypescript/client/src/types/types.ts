export interface IPost {
  name: string;
  owner: string;
  done: boolean;
  id?: string;
}
export type PostListData = IPost[];

export interface IPostList {
  list: IPost[];
}
export interface IPostProps {
  post: IPost;
}
export interface ILoadingState {
  status: "loading";
}
export interface IDoneState {
  status: "done";
  data: PostListData;
}

export type AllStates = ILoadingState | IDoneState;
