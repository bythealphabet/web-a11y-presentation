import useAnime from "@/hooks/useAnime";
import { useState } from "react";

type PathState = {
  BoxY: number;
  CurveStartPointY: number;
  CurveEndPointY: number;
  CurveLineEndPointY: number;
};

interface UsePathsAnimationProps {
  customPath?: string;
  opacity?: number | number[];
  resetShape?: boolean;
}

export function usePathsAnimation({
  customPath,
  opacity,
  resetShape,
}: UsePathsAnimationProps) {
  const [pathState, setPathState] = useState<PathState>({
    BoxY: 0,
    CurveStartPointY: 0,
    CurveEndPointY: 0,
    CurveLineEndPointY: 0,
  });
  const [open, setOpen] = useState(false);
  const [delay, setDelay] = useState(0);
  let initial = open ? 0 : 100;
  let open0 = open ? 100 : 0;

  const firstCurveAnimation = { c1: open0, c2: open0 };
  const secondDelayedCurveAnimation = { c3: open0, c4: open0 };

  const baseAnime = {
    targets: [firstCurveAnimation, secondDelayedCurveAnimation],
    c1: initial,
    c2: initial,
    c3: initial,
    c4: initial,
    easing: function () {
      return (t: number) => (t < 0.5 ? 4 * t ** 3 : 0.5 * (2 * t - 2) ** 3 + 1);
    },
    delay: (_: Element, i: number) => delay + (i === 1 ? 150 : 0),
    opacity,
    update: () => {
      setPathState({
        BoxY: firstCurveAnimation.c1,
        CurveStartPointY: firstCurveAnimation.c2,
        CurveEndPointY: secondDelayedCurveAnimation.c3,
        CurveLineEndPointY: secondDelayedCurveAnimation.c4,
      });
    },
    complete: () => {
      if (resetShape) {
        Object.assign(firstCurveAnimation, { c1: 0, c2: 0 });
        Object.assign(secondDelayedCurveAnimation, { c3: 0, c4: 0 });
        setPathState({
          BoxY: 0,
          CurveStartPointY: 0,
          CurveEndPointY: 0,
          CurveLineEndPointY: 0,
        });
      }
    },
    duration: 600,
    autoplay: false,
  };

  const { animeRef } = useAnime(baseAnime);

  const path =
    customPath ??
    `M 0 ${pathState.BoxY} C 50 ${pathState.CurveStartPointY} 50 ${pathState.CurveEndPointY} 100 ${pathState.CurveLineEndPointY} V 0 H 0`;

  return {
    animeRef,
    path,
    ...pathState,
    setOpen,
    setDelay,
  };
}
