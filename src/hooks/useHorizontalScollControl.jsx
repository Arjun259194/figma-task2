import { useRef } from "react";

export default function useHorizontalScrollControl({
  scrollOffecet: scrollOffeset = 400,
}) {
  const ref = useRef(null);

  function scroll(dir) {
    if (!ref.current) return;

    const newScrollPos =
      ref.current.scrollLeft +
      (dir === "left" ? -scrollOffeset : scrollOffeset);

    ref.current.scrollTo({
      left: newScrollPos,
      behavior: "smooth",
    });
  }

  return {
    ref,
    scroll,
  };
}
