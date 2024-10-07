import React, {FC, useEffect, useState} from 'react';

import './App.css';

export const App: FC = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    debugger
    console.log("effect", counter)
    debugger
    return () => {

      console.log("clear", counter)
      debugger
    }
  }, [counter]);


  return (
    <div className="block">
      <button className="button-block"
              onClick={() => setCounter((c) => c + 1)}>
        increment
      </button>
      <span className="span">{counter}</span>
    </div>
  )
}

