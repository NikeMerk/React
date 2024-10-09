export interface IPost {
  name: string;
  owner: string;
  done: boolean;
  id?: string | number;
}

export type PostListData = IPost[];

export interface IPostList {
  ownerData: string;
  list: IPost[];
  stateStor: boolean;
}

export interface IPostProps {
  post: IPost;
  stateStorageApp?: boolean;
  localArray?: IPost[];
  ownerData?: string;
}

export interface ILoadingState {
  status: "loading";
}

export interface IDoneState {
  status: "done";
  data: PostListData;
}

export type AllStates = ILoadingState | IDoneState;
