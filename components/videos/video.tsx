import clsx from "clsx";
import videoStyles from "./video.module.scss";

export function Video() {
  return (
    <div className={clsx(videoStyles.root, "base-grid layout-grid")}>
      <video muted loop>
        <source src="/videos/drummer-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
