"use client";
import React, { useEffect, useState } from "react";
import navAnimStyles from "./nav-animation-shapes.module.scss";
import usePathsAnimation from "./usePathsAnimation";
import clsx from "clsx";

interface NavAnimationShapesProps {
  active: boolean;
}

function NavAnimationShapes({ active }: NavAnimationShapesProps) {
  const { animeRef: firstAnimeRef, path: firstPath } = usePathsAnimation({
    delay: 0,
    resetShape: true,
    opacity: [0, 1],
  });
  const { animeRef: secondAnimeRef, path: secondPath } = usePathsAnimation({
    delay: 100,
    resetShape: true,
    opacity: [0, 1],
  });

  const { animeRef: thirdAnimeRef, path: thirdPath } = usePathsAnimation({
    delay: 100,
    resetShape: false,
  });

  useEffect(() => {
    if (
      active &&
      firstAnimeRef.current &&
      secondAnimeRef.current &&
      thirdAnimeRef.current
    ) {
      firstAnimeRef.current.play();
      secondAnimeRef.current.play();
      thirdAnimeRef.current.play();
    }

    if (
      !active &&
      firstAnimeRef.current &&
      secondAnimeRef.current &&
      thirdAnimeRef.current
    ) {
      firstAnimeRef.current.play();
      secondAnimeRef.current.play();
      thirdAnimeRef.current.play();
    }
  }, [active]);

  const animationPaths = clsx(navAnimStyles.shapes, {
    [navAnimStyles.shapes__reverse_shape]: !active,
  });

  return (
    <div className={navAnimStyles.root}>
      <svg
        className="nav__shapes "
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path className={animationPaths} d={firstPath}></path>
        <path className={animationPaths} d={secondPath}></path>
        <path
          className={animationPaths}
          fill="#MenuGradient"
          d={thirdPath}
          stroke="white"
        ></path>

        <defs>
          <linearGradient id="MenuGradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop
              offset="50%"
              style={{ stopColor: "rgb(26, 224, 69)", stopOpacity: 1.0 }}
            ></stop>
            <stop
              offset="100%"
              style={{ stopColor: "rgb(255,35,69)", stopOpacity: 1.0 }}
            ></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default NavAnimationShapes;
