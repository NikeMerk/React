import { FC } from "react";
import { BallTriangle } from "react-loading-icons";
import { ListView } from "./ListView";
import {useQuery} from "@tanstack/react-query";
import {getListData} from "../../api/api";
import {queryClient} from "../../App";
interface IFetchListVew {
  owner: string;
  stateStor: boolean;
}

export const FetchListView: FC<IFetchListVew> = ({ owner, stateStor }) => {

  const listQuery = useQuery({
    queryFn : getListData,
    queryKey: ["get", "list"]
  }, queryClient)

  switch (listQuery.status) {
    case "pending":
      return <BallTriangle/>;
    case "success":
      return (
        <ListView
          stateStor={stateStor}
          ownerData={owner}
          list={listQuery.data}
        />
      );
  }
};
