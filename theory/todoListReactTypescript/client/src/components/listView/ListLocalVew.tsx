import { FC, useState } from "react";
import { PostView } from "../itemView/PostView";
import { IPost } from "../../types/types";
import { eventBus } from "../../App";

interface ILIstLocalVewProps {
  ownerData: string;
  stateStor?: boolean;
}

export const ListLocalVew: FC<ILIstLocalVewProps> = ({
  ownerData,
  stateStor,
}) => {
  let countNotDone: number = 0;
  let countDone: number = 0;

  const downLocalDataArray = JSON.parse(localStorage.getItem(ownerData));
  const [localArray, setLocalArray] = useState(
    JSON.parse(localStorage.getItem(ownerData)),
  );

  function reloadLocalList() {
    setLocalArray(JSON.parse(localStorage.getItem(ownerData)));
    eventBus.detach("reload local list vew", reloadLocalList);
  }

  eventBus.on("reload local list vew", reloadLocalList);

  if (localArray !== null) {
    return (
      <>
        <div className="block-list">
          <ul className="list">
            {downLocalDataArray.map((obj: IPost) => {
              if (obj.done === false) {
                countNotDone++;
                return (
                  <PostView
                    ownerData={ownerData}
                    localArray={downLocalDataArray}
                    setLocalArray={setLocalArray}
                    stateStorApp={stateStor}
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
          {downLocalDataArray.map((obj: IPost) => {
            if (obj.done) {
              countDone++;
              return (
                <PostView
                  ownerData={ownerData}
                  localArray={downLocalDataArray}
                  setLocalArray={setLocalArray}
                  stateStorApp={stateStor}
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
  } else {
  }
};
