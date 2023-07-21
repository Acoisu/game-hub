import { GameQuery } from "../App";
import SearchInput from "../components/SearchInput";
import { SortType } from "../components/SortSelector";
import useData, { Platform } from "./useData";
import { Genre } from "./useGenres";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genre: string;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.slug,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.select?.request,
        search: gameQuery.search,
      },
    },
    [gameQuery]
  );

export default useGames;
