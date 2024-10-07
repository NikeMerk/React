import { useState, useCallback } from "react";

export default function useCount() {
  const [count, setState] = useState(0);

  let increment = useCallback(() => {
    setState((currentCount) => currentCount + 1);
  }, []);
  let decrement = useCallback(() => {
    setState((currentCount) => currentCount - 1);
  }, []);

  return { count, increment, decrement };
}
