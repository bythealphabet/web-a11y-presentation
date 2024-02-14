import { Video } from "../components/videos/video";
import Hero from "../components/hero/hero";

export default function Home() {
  return (
    <main
      className="sub-grid"
      style={{
        gridColumn: "1 / -1",
        gridRow: "1 / -1",
      }}
    >
      <Hero>
        <Video />
      </Hero>
    </main>
  );
}
