import { useRef, useEffect } from "react";
import anime, { AnimeInstance, AnimeParams } from "animejs";

function useAnime(animeObj: AnimeParams) {
  const animeRef = useRef<AnimeInstance | null>(null);

  useEffect(() => {
    animeRef.current = anime(animeObj);
  }, [animeObj]);

  return { animeRef };
}

export default useAnime;
