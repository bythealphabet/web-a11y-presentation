"use client";
import React, { useEffect, useState } from "react";
import navAnimStyles from "./nav-animation-shapes.module.scss";
import { usePathsAnimation } from "./usePathsAnimation";
import clsx from "clsx";

interface NavAnimationShapesProps {
  active: boolean;
}

function NavAnimationShapes({ active }: NavAnimationShapesProps) {
  const [load, setLoad] = useState(false);
  const animations = [
    usePathsAnimation({ opacity: [1, 0] }),
    usePathsAnimation({ opacity: [1, 0] }),
    usePathsAnimation({}),
  ];

  useEffect(() => {
    if (!load) {
      animations.forEach(({ setDelay }, index) => {
        if (index === 1) {
          setDelay(200);
        }

        if (index === 2) {
          setDelay(200);
        }
      });
      setLoad(true);
      return;
    }

    animations.forEach(({ animeRef, setOpen, setDelay }, index) => {
      if (animeRef.current && active) {
        animeRef.current.play();
        setOpen(true);
        if (index === 0) {
          setDelay(200);
        }

        if (index === 1) {
          setDelay(0);
        }

        if (index === 2) {
          setDelay(0);
        }
      } else if (animeRef.current && !active) {
        animeRef.current.play();
        setOpen(false);

        if (index === 0) {
          setDelay(0);
        }

        if (index === 1) {
          setDelay(200);
        }

        if (index === 2) {
          setDelay(200);
        }
      }
    });
  }, [active]);

  return (
    <div className={navAnimStyles.root}>
      <svg
        className="nav__shapes"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {animations.map(({ path }, index) => (
          <path
            key={index}
            className={clsx(navAnimStyles.shapes, {
              [navAnimStyles.shapes__reverse_shape]: !active,
            })}
            d={path}
            fill={
              active
                ? index === 2
                  ? "url(#MenuGradient)"
                  : "transparent"
                : "transparent"
            }
          ></path>
        ))}
        <defs>
          <linearGradient id="MenuGradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop
              offset="50%"
              style={{ stopColor: "rgb(13, 13, 13)", stopOpacity: 1.0 }}
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
