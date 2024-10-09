import { FC, useState } from "react";
import { PostView } from "../itemView/PostView";
import { IPost } from "../../types/types";
import { eventBus } from "../../App";

interface ILIstLocalVewProps {
  ownerData: string;
  stateStorage?: boolean;
}

export const ListLocalVew: FC<ILIstLocalVewProps> = ({
  ownerData,
  stateStorage,
}) => {
  const [reload, setReload] = useState(false);

  eventBus.on("reload local list", reloadList)

  function reloadList() {
    setReload(!reload);
  }

  let countNotDone: number = 0;
  let countDone: number = 0;
  const localDataArray = JSON.parse(localStorage.getItem(ownerData));

  if (localDataArray !== null) {
    return (
      <>
        <div className="block-list">
          <ul className="list">
            {localDataArray.map((obj: IPost) => {
              if (obj.done === false) {
                countNotDone++;
                return (
                  <PostView
                    ownerData={ownerData}
                    localArray={localDataArray}
                    stateStorageApp={stateStorage}
                    key={obj.id}
                    post={obj}
                  />
                );
              }
            })}
          </ul>
          {countNotDone !== 0 ? (
            <p className="block-list-count">Tasks to do - {countNotDone}</p>
          ) : undefined}
        </div>
        <div className="block-done">
          {localDataArray.map((obj: IPost) => {
            if (obj.done) {
              countDone++;
              return (
                <PostView
                  ownerData={ownerData}
                  localArray={localDataArray}
                  stateStorageApp={stateStorage}
                  key={obj.id}
                  post={obj}
                />
              );
            }
          })}
          {countDone !== 0 ? (
            <p className="block-list-count">Done - {countDone}</p>
          ) : undefined}
        </div>
      </>
    );
  }
};
