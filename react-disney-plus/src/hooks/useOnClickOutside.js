import { useEffect } from "react"

export default function useOnClickOutside(ref, handler) {
  useEffect(()=> {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {return}
      handler()
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("toucstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("toucstart", listener);
    }
  }, [ref, handler]);
}
