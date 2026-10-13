import { useEffect, useRef, useState } from "react";

// Tracks whether an element overlaps the middle band of the viewport. Unlike
// a ratio threshold this also works for sections taller than the screen
// (common on mobile). Toggles back to false when the element leaves, so
// section animations replay on the way back.
export default function useElementOnScreen<T extends Element = HTMLDivElement>(
  rootMargin = "-35% 0px -35% 0px"
) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin, threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return [ref, isVisible] as const;
}
