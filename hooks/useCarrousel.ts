import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";

export interface UseCarrouselProps {
  /**
   * Array of Elements
   */
  sections: ReactNode[];

  /**
   * Delay between section change in seconds
   */
  delay?: number;

  /**
   * Start point for sections (default 0)
   */
  startAt?: number;

  /**
   * Pause after button click in seconds (0 infinite, default 5s)
   */
  pausedTime?: number;
}
function useCarrousel({
  delay,
  pausedTime,
  sections,
  startAt,
}: UseCarrouselProps) {
  const init = startAt && startAt <= sections.length - 1 ? startAt : 0;
  const [current, setCurrent] = useState<number>(init);
  const [playing, setPlaying] = useState<boolean>(true);

  const seconds = useMemo(
    () => ({
      section: (delay || 1) * 1000,
      pause: (pausedTime || 5) * 1000,
    }),
    [delay, pausedTime]
  );

  const handleSection = useCallback(
    (dir: -1 | 1) => {
      if (dir === 1)
        return setCurrent((old) =>
          current + dir < sections.length ? old + 1 : 0
        );
      if (dir === -1) {
        return setCurrent((old) =>
          current + dir >= 0 ? old - 1 : sections.length - 1
        );
      }
    },
    [current, sections.length]
  );

  useEffect(() => {
    if (!playing) return;
    const s = seconds.section;
    const timeout = setTimeout(() => handleSection(1), s);
    return () => clearTimeout(timeout);
  }, [seconds, current, delay, handleSection, playing]);

  const handlePause = (pause?: number) => {
    setPlaying(false);
    if (pause) return setTimeout(() => setPlaying(true), pause * 1000);
    if (pausedTime === 0) return;
    const s = seconds.pause;
    setTimeout(() => setPlaying(true), s);
  };

  const prev = () => {
    handleSection(-1);
    handlePause();
  };
  const next = () => {
    handleSection(1);
    handlePause();
  };

  /**
   * Change section
   * @param i: Section index
   * @param pause: Pause after change (in seconds)
   */
  const goTo = (i: number, pause?: number) => {
    setCurrent(i);
    if (pause) handlePause(pause);
  };

  return {
    goTo,
    index: current,
    next,
    prev,
    section: sections[current],
    sections,
  };
}

export default useCarrousel;
