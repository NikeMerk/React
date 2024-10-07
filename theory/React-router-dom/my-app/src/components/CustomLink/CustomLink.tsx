import {FC} from "react";
import {Link, useMatch} from "react-router-dom";

export const CustomLink: FC = ({ to, ...props}) => {

  const match = useMatch(to)

  return (
    <Link to={to} {...props}
      style={{
        color: match ? "tomato" : "white"
      }}
    >
    </Link>
  )
}