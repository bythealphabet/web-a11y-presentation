import clsx from "clsx";
import hamburgerStyles from "./hamburger.module.scss";

interface HamburgerProps {
  active: boolean;
  handleMenuClick: () => void;
}

function Hamburger({ active, handleMenuClick }: HamburgerProps) {
  function handleClick() {
    handleMenuClick();
  }

  return (
    <button
      className={clsx(hamburgerStyles.hamburgerMenu)}
      aria-controls="primary-navigation"
      aria-expanded={active}
      onClick={() => handleClick()}
    >
      <svg className={hamburgerStyles.hamburger} viewBox="0 0 80 80">
        <rect
          className={clsx(hamburgerStyles.line, hamburgerStyles.top)}
          width="50"
          height="5"
          x="25"
          y="24"
          rx="5"
        ></rect>
        <rect
          className={clsx(hamburgerStyles.line, hamburgerStyles.middle)}
          width="50"
          height="6"
          x="25"
          y="37"
          rx="5"
        ></rect>
        <rect
          className={clsx(hamburgerStyles.line, hamburgerStyles.bottom)}
          width="50"
          height="6"
          x="25"
          y="52"
          rx="5"
        ></rect>
      </svg>
    </button>
  );
}

export default Hamburger;
