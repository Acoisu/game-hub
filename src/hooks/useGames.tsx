import useData from "./useData";
import { Genre } from "./useGenres";
import { Platforms } from "./usePlatforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genre: string;
}
const useGames = (
  genreFilter: Genre | null,
  platformFilter: Platforms | null
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: genreFilter?.slug,
        platforms: platformFilter?.id,
      },
    },
    [genreFilter?.slug, platformFilter?.id]
  );

export default useGames;
