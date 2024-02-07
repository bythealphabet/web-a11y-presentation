import clsx from "clsx";
import hamburgerStyles from "./hamburger.module.scss";

interface HamburgerProps {
  active: boolean;
  setActive: (active: boolean) => void;
}

function Hamburger({ active, setActive }: HamburgerProps) {
  return (
    <button
      className={clsx(hamburgerStyles.hamburgerMenu, {
        [hamburgerStyles["hamburgerMenu--expanded"]]: active,
      })}
      aria-expanded="false"
      aria-controls="main-menu"
      onClick={() => setActive(!active)}
    >
      <span className={hamburgerStyles.hamburgerLineWrapper}>
        <span className={hamburgerStyles.hamburgerLine}></span>
        <span className={hamburgerStyles.hamburgerLine}></span>
        <span className={hamburgerStyles.hamburgerLine}></span>
      </span>
    </button>
  );
}

export default Hamburger;
