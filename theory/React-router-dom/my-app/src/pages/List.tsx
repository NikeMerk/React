import {FC} from "react";
import {Link} from "react-router-dom";

interface IListProps {
  data: Array<object>
}

export const List:FC<IListProps> = ({data}) => {
  return (
    <ul className="list">
      {data.map(obj => {
        return <Link key={obj.id} to={`/posts/:${obj.id}`}>
          <li>
            {obj.title}
          </li>
        </Link>
      })}
    </ul>
  )
}