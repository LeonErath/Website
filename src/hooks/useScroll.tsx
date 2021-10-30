import { useState, useEffect } from "react";

const TOP_HEIGHT = 10;

export const useScrollHandler = () => {
  // setting initial value to true
  const [isTop, setTop] = useState<boolean>(true);

  // running on mount
  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY < TOP_HEIGHT;
      if (scrollCheck !== isTop) {
        setTop(scrollCheck);
      }
    };

    // setting the event handler from web API
    document.addEventListener("scroll", onScroll);

    // cleaning up from the web API
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [isTop, setTop]);

  return isTop;
};
