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
          ></path>
        ))}
      </svg>
    </div>
  );
}

export default NavAnimationShapes;
