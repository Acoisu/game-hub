import { useQuery } from "@tanstack/react-query";
import APIClient from "../../services/api-client";
import GameScreenShots from "../../entities/game detail/GameScreenShots";

const useScreenShots = (gameId: number) => {
  const apiClient = new APIClient<GameScreenShots>(
    `/games/${gameId}/screenshots`
  );
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenShots;
