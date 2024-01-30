import clsx from "clsx";
import styles from "./layout-slide.module.scss";

function SlideLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className={clsx("base-grid", styles.root)}>
      <h1>Layout slide</h1>
      {children}
    </main>
  );
}

export default SlideLayout;
