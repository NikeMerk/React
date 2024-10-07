import {FC} from "react";
import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {queryClient} from "../App.tsx";
import {DataLink} from "../components/Object/DataLink.tsx";
import {getObject} from "../api/api.ts";

export const SinglePage: FC = () => {
  const params = useParams()

  const queryObject = useQuery({
    queryFn: () => getObject(params.id),
    queryKey: ["get object"]
  }, queryClient)

  switch (queryObject.status) {
    case "success":
      return <DataLink data={queryObject.data}/>
  }
}
