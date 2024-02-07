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
  delay: number;
  opacity?: number | number[];
  resetShape?: boolean;
}

export function usePathsAnimation({
  customPath,
  delay,
  opacity,
  resetShape,
}: UsePathsAnimationProps) {
  const [pathState, setPathState] = useState<PathState>({
    BoxY: 0,
    CurveStartPointY: 0,
    CurveEndPointY: 0,
    CurveLineEndPointY: 0,
  });

  const firstCurveAnimation = { c1: 0, c2: 0 };
  const secondDelayedCurveAnimation = { c3: 0, c4: 0 };

  const baseAnime = {
    targets: [firstCurveAnimation, secondDelayedCurveAnimation],
    c1: 100,
    c2: 100,
    c3: 100,
    c4: 100,
    easing: function () {
      return (t: number) => (t < 0.5 ? 4 * t ** 3 : 0.5 * (2 * t - 2) ** 3 + 1);
    },
    delay: (_: Element, i: number) => delay + (i === 1 ? 100 : 0),
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
  };
}
