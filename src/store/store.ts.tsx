import { create } from "zustand";
import { SortType } from "../components/SortSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  select?: SortType;
  search?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setSelect: (selectType: SortType) => void;
  setPlatformId: (platformId: number) => void;
  setGenreId: (genreId: number) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, searchText } })),
  setSelect: (selectType) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, selectType } })),
  setPlatformId: (platformId) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, platformId } })),
  setGenreId: (genreId) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, genreId } })),
}));
export default useGameQueryStore;
