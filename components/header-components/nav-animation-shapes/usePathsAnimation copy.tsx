import useAnime from "@/hooks/useAnime";
import { useState } from "react";

function usePathsAnimation({
  customPath,
  delay,
  opacity,
  resetShape,
}: {
  customPath?: string;
  delay: number;
  opacity?: number | number[];
  resetShape?: boolean;
}) {
  const [BoxY, setBoxY] = useState(0);
  const [CurveStartPointY, setCurveStartPointY] = useState(0);
  const [CurveEndPointY, setCurveEndPointY] = useState(0);
  const [CurveLineEndPointY, setCurveLineEndPointY] = useState(0);

  const firstAnimation = {
    c1: 0,
    c2: 0,
  };

  const delayedAnimation = {
    c3: 0,
    c4: 0,
  };

  const baseAnime = {
    targets: [firstAnimation, delayedAnimation],
    c1: 100,
    c2: 100,
    c3: 100,
    c4: 100,
    easing: function () {
      return function (t: number) {
        return t < 0.5 ? 4 * Math.pow(t, 3) : 0.5 * Math.pow(2 * t - 2, 3) + 1;
      };
    },
    delay: function (_: Element, i: number) {
      if (i == 1) {
        return delay + 100;
      }
      return delay;
    },
    opacity,
    update: function () {
      setBoxY(firstAnimation.c1);
      setCurveStartPointY(firstAnimation.c2);
      setCurveEndPointY(delayedAnimation.c3);
      setCurveLineEndPointY(delayedAnimation.c4);
    },
    complete: function () {
      if (resetShape) {
        firstAnimation.c1 = 0;
        firstAnimation.c2 = 0;
        delayedAnimation.c3 = 0;
        delayedAnimation.c4 = 0;
        setBoxY(0);
        setCurveStartPointY(0);
        setCurveEndPointY(0);
        setCurveLineEndPointY(0);
      }
    },
    duration: 600,
    autoplay: false,
  };

  const { animeRef } = useAnime({
    ...baseAnime,
  });

  console.log("firstAnimation", firstAnimation);
  console.log("delayedAnimation", delayedAnimation);

  return {
    animeRef,
    path:
      customPath ??
      `M 0 ${BoxY} C 50 ${CurveStartPointY} 50 ${CurveEndPointY} 100 ${CurveLineEndPointY} V 0 H 0`,
    BoxY,
    CurveStartPointY,
    CurveEndPointY,
    CurveLineEndPointY,
  };
}

export default usePathsAnimation;
