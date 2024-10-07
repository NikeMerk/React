import {FC, useEffect, useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {queryClient} from "../../App.tsx";
import {List} from "../../pages/List.tsx";
import {getList} from "../../api/api.ts";

export const ListFetch:FC = () => {

  const queryList = useQuery({
    queryFn: () => getList(),
    queryKey: ["get list"]
  }, queryClient)

  switch (queryList.status) {
    case "pending":
      return "LOading"
    case "success":
      console.log(queryList.data)
      return <List data={queryList.data}/>
  }

}