import { create } from "zustand";
import { SortType } from "../components/SortSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  select?: string;
  search?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setSelect: (selectType: string) => void;
  setPlatformId: (platformId: number) => void;
  setGenreId: (genreId: number) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (search) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, search } })),
  setSelect: (select) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, select } })),
  setPlatformId: (platformId) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, platformId } })),
  setGenreId: (genreId) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, genreId } })),
}));
export default useGameQueryStore;
