"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./header.module.scss";
import clsx from "clsx";
import Logo from "@/components/logo/logo";
import Hamburger from "@/components/header-components/hamburger/hamburger";
import NavAnimationShapes from "@/components/header-components/nav-animation-shapes/nav-animation-shapes";
import useAnime from "@/hooks/useAnime";
import { useNavigationState } from "@/store/useNavigationState";

const navigationLinks = [
  {
    name: "Home",
    url: "/",
    main: true,
  },
  {
    name: "About",
    url: "/about",
    main: true,
  },
  {
    name: "Services",
    url: "/web-a11y-services",
    main: true,
  },
  {
    name: "Cases",
    url: "/web-a11y-cases",
    main: true,
  },
  {
    name: "Articles",
    url: "/web-a11y-articles",
  },
  {
    name: "Web a11y Slides",
    url: "/web-a11y-slides",
  },
  {
    name: "Web a11y Resources",
    url: "/web-a11y-resources",
  },
  {
    name: "Web a11y Tools",
    url: "/web-a11y-tools",
  },
  {
    name: "Web a11y Videos",
    url: "/web-a11y-videos",
  },
];

const Header = () => {
  const showStyles = true;
  const { isMenuOpen, setIsMenuOpen } = useNavigationState();
  const menuRef = React.useRef<HTMLDivElement>(null);

  const openAnimeRef = useAnime({
    targets: ".menu-item",
    translateY: ["100%", "0%"],
    opacity: [0, 1],
    duration: 900,
    delay: function (el, i, l) {
      return 400 + i * 100;
    },
    autoplay: false,
  });

  const closeAnimeRef = useAnime({
    targets: ".menu-item",
    translateY: ["0%", "100%"],
    opacity: [1, 0],
    duration: 900,
    autoplay: false,
  });

  const { animeRef: initialAnimeRef } = useAnime({
    targets: ".menu-item",
    translateY: ["100%", "0%"],
    opacity: [0, 1],
    autoplay: false,
  });

  function handleMenuClick(open: boolean) {
    setIsMenuOpen(open);
    if (
      openAnimeRef.animeRef.current &&
      closeAnimeRef.animeRef.current &&
      menuRef.current
    ) {
      if (open) {
        menuRef.current.style.setProperty("--menuVisible", "visible");
        openAnimeRef.animeRef.current.play();
      } else {
        menuRef.current.style.setProperty("--menuVisible", "hidden");
        closeAnimeRef.animeRef.current.play();
      }
    }
  }

  return (
    <header className={clsx(showStyles && "sub-grid", styles.root)}>
      <Logo />
      {showStyles && <Hamburger handleMenuClick={handleMenuClick} />}

      <div
        className={clsx(
          showStyles && styles.menu,
          showStyles && "base-grid",
          showStyles && "menu"
        )}
        ref={menuRef}
      >
        <nav
          className={clsx(showStyles && "sub-grid")}
          role="navigation"
          aria-label="Main menu"
        >
          <ul role="list">
            <div className={styles.mainLinks}>
              {navigationLinks
                .filter((link) => link.main)
                .map((link, index) => (
                  <li
                    className={clsx("menu-item", styles.menuItem)}
                    key={index}
                  >
                    <Link href={link.url}>{link.name}</Link>
                  </li>
                ))}
            </div>
            <div className={styles.otherLinks}>
              {navigationLinks
                .filter((link) => !link.main)
                .map((link, index) => (
                  <li className="menu-item" key={index}>
                    <Link href={link.url}>{link.name}</Link>
                  </li>
                ))}
            </div>
          </ul>
        </nav>
      </div>

      <NavAnimationShapes active={isMenuOpen} />
    </header>
  );
};

export default Header;
