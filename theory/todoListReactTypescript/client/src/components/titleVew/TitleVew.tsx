import {FC} from "react";
import "./titleVew.css"

interface ITitleProp {
  title: string;
}

export const TitleVew:FC<ITitleProp> = ({title}) => {
  return (
    <h1 className="title">{title}</h1>
  )
}
