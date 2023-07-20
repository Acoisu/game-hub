import SearchInput from "../components/SearchInput";
import { SortType } from "../components/SortSelector";
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
  platformFilter: Platforms | null,
  selectorFilter: SortType | null,
  search: string | null
) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: genreFilter?.slug,
        platforms: platformFilter?.id,
        ordering: selectorFilter?.request,
        search: search,
      },
    },
    [genreFilter?.slug, platformFilter?.id, selectorFilter?.request, search]
  );

export default useGames;
