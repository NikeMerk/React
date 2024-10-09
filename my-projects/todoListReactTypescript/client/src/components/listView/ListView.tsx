import { FC } from "react";
import { IPostList } from "../../types/types";
import { PostView } from "../itemView/PostView";
import "./list.css";

export const ListView: FC<IPostList> = ({ ownerData, list, stateStor }) => {
  let countNotDone: number = 0;
  let countDone: number = 0;

  return (
    <>
      <div className="block-list">
        <ul className="list">
          {list.map((obj) => {
            if (obj.owner === ownerData) {
              if (obj.done === false) {
                countNotDone++;
                return (
                  <PostView stateStorageApp={stateStor} key={obj.id} post={obj} />
                );
              }
            }
          })}
        </ul>
        {countNotDone !== 0 ? (
          <p className="block-list-count">Tasks to do - {countNotDone}</p>
        ) : undefined}
      </div>
      <div className="block-done">
        {list.map((obj) => {
          if (obj.owner === ownerData) {
            if (obj.done) {
              countDone++;
              return (
                <PostView stateStorageApp={stateStor} key={obj.id} post={obj} />
              );
            }
          }
        })}
        {countDone !== 0 ? (
          <p className="block-list-count">Done - {countDone}</p>
        ) : undefined}
      </div>
    </>
  );
};
