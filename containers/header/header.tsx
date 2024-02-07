"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./header.module.scss";
import clsx from "clsx";
import Logo from "@/components/logo/logo";
import Hamburger from "@/components/header-components/hamburger/hamburger";
import NavAnimationShapes from "@/components/header-components/nav-animation-shapes/nav-animation-shapes";

const Header = ({ model }) => {
  const [homePageUrl, setHomePageUrl] = useState("");
  const [currentPage, setCurrentPage] = useState(null);
  const [active, setActive] = useState(false);

  const handelNavAnimation = () => {
    return "open";
  };

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

  return (
    <header className={clsx("sub-grid", styles.root)}>
      <Logo />
      <Hamburger active={active} setActive={setActive} />
      <nav role="navigation" aria-label="Main menu">
        <div className="nav" id="main-menu">
          <div className="nav__wrap">
            <div className="nav__menu-wrap">
              {model.hasLeftColumnLinks && (
                <ul className="nav__list nav__list--left">
                  {model.leftColumnLinks.map(
                    (link, index) =>
                      link.url && (
                        <li key={index} className="nav__link">
                          <Link
                            href={link.url}
                            target={link.target}
                            className="gtm-navigation__link"
                          >
                            {link.name}
                          </Link>
                        </li>
                      )
                  )}
                </ul>
              )}

              {model.hasRightColumnLinks && (
                <ul className="nav__list nav__list--right">
                  {model.rightColumnLinks.map(
                    (link, index) =>
                      link.url && (
                        <li key={index} className="nav__link--small">
                          <Link
                            href={link.url}
                            target={link.target}
                            className="gtm-navigation__link"
                          >
                            {link.name}
                          </Link>
                        </li>
                      )
                  )}
                </ul>
              )}
            </div>

            {currentPage && (
              <div className="nav__footer footer">
                {/* NavFooterViewComponent equivalent for React */}
              </div>
            )}
          </div>
        </div>
      </nav>
      <NavAnimationShapes active={active} />
    </header>
  );
};

export default Header;
