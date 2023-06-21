import { useRef, useEffect } from 'react';
//커스텀 훅
export default function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(()=> {
    savedCallback.current = callback;
  });

  useEffect(()=> {
    function tick() {
      savedCallback.current();
    }

    if(delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);

  return savedCallback.current;
}
