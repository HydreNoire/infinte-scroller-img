import { useEffect, useState } from "react";

export function useScrollPosition() {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const listener = window.addEventListener("scroll", handleScroll);

    // Remove the listener if App is not in the DOM
    return () => {
      window.removeEventListener(listener, null);
    };
  }, []);

  function handleScroll() {
    // if height of the window + the scroll top >= height of the total window
    setIsBottom(
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight
    );
  }

  return { isBottom };
}
