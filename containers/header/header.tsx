"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./header.module.scss";
import clsx from "clsx";
import Logo from "@/components/logo/logo";
import Hamburger from "@/components/header-components/hamburger/hamburger";
import NavAnimationShapes from "@/components/header-components/nav-animation-shapes/nav-animation-shapes";
import useAnime from "@/hooks/useAnime";

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

const Header = ({ model }) => {
  const [homePageUrl, setHomePageUrl] = useState("");
  const [currentPage, setCurrentPage] = useState(null);
  const [active, setActive] = useState(false);
  const showStyles = true;

  const { animeRef } = useAnime({
    targets: ".menu",
    translateX: ["100%", "0%"],
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 900,
    delay: 300,
    autoplay: false,
  });

  //   useEffect(() => {
  //     // Assuming getContentService and getCurrentPage are functions that fetch the necessary data
  //     // These functions need to be implemented according to your project's architecture
  //     const fetchHomePage = async () => {
  //       const homePage = await getContentService().getHomePageForContent();
  //       setHomePageUrl(homePage?.url);
  //     };

  //     const fetchCurrentPage = async () => {
  //       const currentPageData = await getCurrentPage();
  //       setCurrentPage(currentPageData);
  //     };

  //     fetchHomePage();
  //     fetchCurrentPage();
  //   }, []);

  function handleMenuClick() {
    // if (animeRef.current && !active) {
    //   animeRef.current.play();
    // }

    setActive(!active);
  }

  return (
    <header className={clsx(showStyles && "sub-grid", styles.root)}>
      <Logo />
      {showStyles && (
        <Hamburger active={active} handleMenuClick={handleMenuClick} />
      )}

      {/* <div
        className={clsx(
          showStyles && styles.menu,
          showStyles && "base-grid",
          showStyles && "menu"
        )}
      >
        <nav
          className={clsx(showStyles && "sub-grid")}
          role="navigation"
          aria-label="Main menu"
        >
          <ul role="list">
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div> */}

      <NavAnimationShapes active={active} />
    </header>
  );
};

export default Header;
