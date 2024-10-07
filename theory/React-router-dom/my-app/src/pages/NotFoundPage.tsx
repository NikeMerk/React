import {FC} from "react";
import {Link} from "react-router-dom";

export const NotFoundPage:FC = () => {
  return (
    <div>
      this page doest't exist. Go <Link to="/">Home</Link>
    </div>
  )
}