import { useEffect, useRef } from "react";

const useClickOutside = (handler) => {
  const domNode = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (domNode.current && !domNode.current.contains(event.target)) {
        handler(); // Call the provided function (e.g., close modal)
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handler]);

  return domNode;
};

export default useClickOutside;
