import { useEffect, useState } from "react";

// Which of the given sections holds the middle of the viewport, if any.
// Only watches while `enabled` (the sections exist on the home page only).
export default function useActiveSection(
  ids: readonly string[],
  enabled: boolean,
): string | undefined {
  const [active, setActive] = useState<string>();

  useEffect(() => {
    if (!enabled) return;
    const targets = ids.flatMap((id) => {
      const el = document.getElementById(id);
      return el ? [el] : [];
    });
    // A zero-height band across the middle of the screen.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
          else
            setActive((current) =>
              current === e.target.id ? undefined : current,
            );
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    for (const t of targets) observer.observe(t);
    return () => observer.disconnect();
  }, [ids, enabled]);

  // The observer reports each section as soon as it starts watching, so a
  // stale value from an earlier visit is replaced straight away.
  return enabled ? active : undefined;
}
