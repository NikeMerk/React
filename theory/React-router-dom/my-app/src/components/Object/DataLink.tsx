import {FC} from "react";

interface IDataLinkProps {
  data : {
    "userId": number | string
    "id": number | string
    "title": string
    "body": string
  }
}

export const DataLink:FC<IDataLinkProps> = ({data}) => {
  return (
    <>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </>
  )
}