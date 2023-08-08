import { useQuery } from "@tanstack/react-query";
import { GameMovie } from "../entities/GameMovie";
import APIClient from "../services/api-client";

const useMovies = (gameId: number) => {
  const apiClient = new APIClient<GameMovie>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["movies", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useMovies;
